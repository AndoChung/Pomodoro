import jwt from "jsonwebtoken"
import { JWTSecret } from "../config.js";

const auth = async (req, res, next) => {
    try {
        const token =req.headers.cookie.split("=")[1];
        if (!token) {
            res.status(401).json({ errorMessage: "Unauth" });
        }
        const verified = await jwt.verify(token, JWTSecret);
        req.user = verified.user;
        next();
    } catch (error) {
        console.log(error.message);
        res.status(401).json({ errorMessage: "Unauth" });
    }
}

export default auth;