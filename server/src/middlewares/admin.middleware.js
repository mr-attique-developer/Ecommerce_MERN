export const verifyAdmin = async (req, res, next) => {
    try {
        if(req.role !== "admin"){
            return res.status(401).json({
                success: false,
                message: "Unauthorized access"
            })
    
        }
        next()
    } catch (error) {
        console.log("Error in verifyAdmin middleware", error);
        
    }
}