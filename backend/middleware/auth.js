import jwt from "jsonwebtoken"
import { JWTSecret } from "../config.js";

function auth(req, res, next) {
    try {
        const token = req.cookies.token;
        if (!token) {
            res.status(401).json({ errorMessage: "Unauthorized" });
        }

        const verified = jwt.verify(token, JWTSecret);
        req.user = verified.user;

        next();
    } catch (error) {
        console.log(error.message);
        res.status(401).json({ errorMessage: "Unauthorized" });
    }
}

export default auth;