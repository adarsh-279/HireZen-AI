import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import blacklistTokenModel from "../models/blacklist.model.js";

/**
 * @name registerUserController
 * @description registers a new user if it doesnot exists in the database, expects firstName, lastName, email and password in the request
 * @access Public
 */

async function registerUserController(req, res) {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({
            message: "Please provide all the required fields"
        })
    }

    const userExists = await userModel.findOne({
        $or: [{username}, {email}]
    })

    if (userExists) {
        return res.status(400).json({
            message: "Account already exists with this username or email."
        })
    }

    const hash = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username,
        email,
        password: hash
    })

    const token = jwt.sign(
        { id: user._id, username: user.username },
        process.env.JWT_SECRET,
        {expiresIn: "1d"}
    )

    res.cookie("token", token)

    res.status(201).json({
        message: "User created sucessfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    })

}


/**
 * @name loginUserController
 * @description logins a user, expects username or email and password in the request
 * @access Public
 */

async function loginUserController(req, res) {
    const { username, email, password } = req.body
    
    const user = await userModel.findOne({
        $or: [{username}, {email}]
    })

    if (!user) {
        return res.status(400).json({
            message: "Invalid username / email or password"
        })
    }

    const validatePassword = await bcrypt.compare(password, user.password)

    if (!validatePassword) {
        return res.status(400).json({
            message: "Invalid username / email or password"
        })
    }

    const token = jwt.sign(
        { id: user._id, username: user.username },
        process.env.JWT_SECRET,
        {expiresIn: "1d"}
    )

    res.cookie("token", token)

    res.status(200).json({
        message: "User logged in sucessfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    })

}


/**
 * @name logoutUserController
 * @description logouts a user, then blacklists the token 
 * @access Public
 */

async function logoutUserController(req, res) {
    const token = req.cookies.token

    if (token) {
        await blacklistTokenModel.create({token})
    }

    res.clearCookie("token", { httpOnly: true });

    res.status(200).json({
        message: "User logged out sucessfully"
    })
}

/**
 * @name getMeController
 * @description get the current logged in user details
 * @access Private
 */

async function getMeController(req, res) {
    const user = await userModel.findById(req.user.id)

    res.status(200).json({
        message: "User details fetched sucessfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    })
}

export default {
    registerUserController,
    loginUserController,
    logoutUserController,
    getMeController
}