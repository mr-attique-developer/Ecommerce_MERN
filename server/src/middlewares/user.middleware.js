import jwt from "jsonwebtoken"
export const verifyToken = async (req,res,next)=>{
    try {
        const token = req.cookies.token
        console.log(token)
        if(!token){
            return res.status(401).json({
                success: false,
                message: "Invalid token"
            })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if(!decoded){
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            })
        }
        console.log(req)
        console.log(decoded)
        req.userId = decoded.userId
        req.role = decoded.role
        next()
    } catch (error) {
        console.log("Error in verifyToken middleware",error);
    }
}