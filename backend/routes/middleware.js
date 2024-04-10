
import jwt from "jsonwebtoken"

export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({message:"auth failed"});
    }

    const token = authHeader.split(' ')[1]; // bearer 
    
    console.log(token)
    try {
        const decoded = jwt.verify(token, "ultra-strong-secret-512-BIT-encryption");

        
        req.body.user.id = decoded.userId;

        next();
    } catch (err) {
        console.log(err)
        return res.status(403).json({err:"authurization failed"});
    }
};



