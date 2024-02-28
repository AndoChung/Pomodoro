import express from "express";
import { PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";

import { User } from "./models/userModel.js";

const app = express();

app.use(express.json());



// create a new user
app.post("/user", async (req, res) => {
    try {
        if (!req.body.email || !req.body.password || !req.body.name) {
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
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ messsge: error.message })
    }
}) 

// find all users
app.get("/user", async (req, res) => {
    try {
        const users = await User.find({});

        return res.status(200).json(users);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})


// find a single user by id
app.get("/user/:id" , async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findById(id);

        return res.status(200).json(user);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})

// Update a single user
app.put("/user/:id", async (req, res) => {
    try {
        if (!req.body.email || !req.body.password || !req.body.name) {
            return res.status(400).send({
            message: 'Send all required fields: email, password, name'
            })
        }
        const { id } = req.params;

        const result = await User.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).json({ message: "Book not found"});
        }

        return res.status(200).send({ message: "Book updated successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message});
    }
})

app.delete("/user/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const result = await User.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: "Book not found"});
        }

        return res.status(200).send({ message: "Book deleted successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
})

app.get("/", (req, res) => {
    res.status(223).send("I Love Gloria");
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