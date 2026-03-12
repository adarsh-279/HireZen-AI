import jwt from "jsonwebtoken";
import blacklistTokenModel from "../models/blacklist.model.js";

async function authUser(req, res, next) {
    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized access, token not provided"
        })
    }

    const isBlacklistedToken = await blacklistTokenModel.findOne({
        token
    })

        if (isBlacklistedToken) {
        return res.status(401).json({
            message: "Unauthorized access, token is invalid"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = decoded

        next()

    } catch (error) {
        return res.status(401).json({
            message: "Invalid token"
        })
    }
}

export default {
    authUser
}