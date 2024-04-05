const jwt =require("jsonwebtoken");
const { JWT_SECRET } = require("../config/constants");
const requireLogin=async(req,res,next)=>{
    try {
        const token = req.headers?.authorization?.replace("Bearer ", "");
        if (!token) {
            return res.status(401).json({ error: "Unauthorized", errorDescription: "Authorization token in missing in headers" });
        }
        const decodedToken = jwt.verify(token, JWT_SECRET);
        req.userId = decodedToken.id;
        req.userEmail = decodedToken.email;
        return next()
    } catch (error) {
        console.error(error);
    return res.status(401).json({ error: "Unauthorized", errorDescription: error.message });
    }
}

module.exports={requireLogin}
