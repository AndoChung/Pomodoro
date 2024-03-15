import express from "express";
import { Goal } from "../models/goalModel.js";
import auth from "../middleware/auth.js";

const router = express.Router();


// Create a Goal
router.post("/", async (req, res) => {
    try {
        if (!req.body.author || !req.body.task) {
            return res.status(400).send({ message: "Send task and author" })
        }
        const newGoal = {
            author: req.body.author,
            task: req.body.task,
        }
        const goal = await Goal.create(newGoal);

        return res.status(201).send(goal);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ messsge: error.message })
    }
})

// Get all posts made by User
router.get("/", auth, async (req, res) => {
    try{
        console.log(req.user)
        const goals = await Goal.find({ author : req.user })
        res.status(201).send(goals)
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ messsge: error.message })
    }
})

export default router;