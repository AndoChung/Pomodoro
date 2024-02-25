import express from "express";
import { PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";

import { User } from "./models/userModel.js";

const app = express();

app.use(express.json());

app.post("/", async (req, res) => {
    try {
        if (!req.body.email || !req.body.password || req.body.name) {
            return res.status(400).send({
            message: 'Send all required fields: email, password, name'
        })
    }
        const newUser = {
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
    };
        const user = await User.create(newUser);
        return res.status(201).send(user);
    } catch {
        console.log(error.message);
        res.status(500).send({ messsge: error.message })
    }

}) 

app.get("/", (req, res) => {
    console.log(req);
    res.send("I Love Gloria");
})

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("App Connected to DB");
        app.listen(PORT, () => {
            console.log(`Server running on Port ${PORT}`)
        });
    })
    .catch((error) => {
        console.log(error);
    });