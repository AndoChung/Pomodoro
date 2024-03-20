import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWTSecret } from '../config.js';

export const createUser = async (req, res) => {
    try {
        if (!req.body.password || !req.body.name || !req.body.username || !req.body.email) {
            return res.status(400).send({
            message: 'Send all required fields: username, password'
            })
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        const newUser = {
            password: hashedPassword,
            name: req.body.name,
            email: req.body.email,
            username: req.body.username
        };
        const user = await User.create(newUser);

        /* Log in the User */
        const token = jwt.sign({ user: user._id}, JWTSecret);

        res
            .cookie("token", token, {
                httpOnly: true,
            })
            .send() 
        // return res.status(201).send(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ messsge: error.message })
    }
}

export const loginUser = async (req, res) => {
    const user = await User.findOne({ username: req.body.username})
    if (user == null) {
        return res.status(400).send("Cannot Find User")
    }
    try {
        const validLogin = await bcrypt.compare(req.body.password, user.password)
        if (!validLogin) {
            return res.status(400).send("Wrong Password")
        }
        const token = jwt.sign({ user: user._id}, JWTSecret);

        res
            .cookie("token", token, {
                httpOnly: true,
            })
            .send() 
    } catch (error) {
        console.log(error)
    }
}

export const logoutUser = (req, res) => {
    res
        .cookie("token", "", {
            httpOnly:true,
            expires: new Date(0)
        })
        .send();
}