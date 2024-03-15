import jwt from "jsonwebtoken"
import { JWTSecret } from "../config.js";

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            res.status(401).json({ errorMessage: "Unauthorized" });
        }
        const verified = await jwt.verify(token, JWTSecret);
        req.user = verified.user;
        next();
    } catch (error) {
        console.log(error.message);
        res.status(401).json({ errorMessage: "Unauthorized" });
    }
}

export default auth;