import express from 'express';
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";

const router = express.Router();



// create a new user
router.post("/", async (req, res) => {
    try {
        if (!req.body.password || !req.body.name) {
            return res.status(400).send({
            message: 'Send all required fields: username, password'
            })
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        const newUser = {
            password: hashedPassword,
            name: req.body.name
        };
        const user = await User.create(newUser);
        return res.status(201).send(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ messsge: error.message })
    }
}) 

// login user route
router.post("/login", async (req, res) => {
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

    }
})


// find all users
router.get("/", async (req, res) => {
    try {
        const users = await User.find({});

        return res.status(200).json(users);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})

// find a single user by id
router.get("/:id" , async (req, res) => {
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
router.put("/:id", async (req, res) => {
    try {
        if (!req.body.password || !req.body.name || !req.body.goals) {
            return res.status(400).send({
            message: 'Send all required fields: username, password, goals'
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

// Delete a user
router.delete("/:id", async (req, res) => {
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

export default router;