import express from "express";
import { Goal } from "../models/goalModel.js";

const router = express.Router();


// Create a Goal
router.post("/", async (req, res) => {
    try {
        if (!req.body.creator || !req.body.task) {
            return res.status(400).send({ message: "Send task and creator" })
        }
        const newGoal = {
            creator: req.body.creator,
            task: req.body.task,
        }
        const goal = await Goal.create(newGoal);

        return res.status(201).send(goal);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ messsge: error.message })
    }
})

export default router;