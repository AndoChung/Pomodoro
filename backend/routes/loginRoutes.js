import express from 'express';
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";

const router = express.Router();

// login user route
router.post("/", async (req, res) => {
    console.log("I Love Gloria")


    const user = await User.findOne({ name: req.body.name})
    if (user == null) {
        return res.status(400).send("Cannot Find User")
    }
    console.log(user);
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send("Success")
        } else {
            res.send("Not Allowed")
        }
    } catch (error) {
        console.log(error)
    }
})

export default router