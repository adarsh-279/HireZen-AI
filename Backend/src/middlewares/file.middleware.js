import multer from "multer";

const uploadResume = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 2 * 1024 * 1024 // 2MB
    }
})

export default uploadResume