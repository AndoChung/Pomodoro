import express from "express";
import { Goal } from "../models/goalModel.js";
import auth from "../middleware/auth.js";

const router = express.Router();


// Create a Goal
router.post("/", auth, async (req, res) => {
    try {
        if (!req.body.task) {
            return res.status(400).send({ message: "Send task" })
        }
        const newGoal = {
            author: req.user,
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
        const goals = await Goal.find({ author : req.user })
        res.status(201).send(goals)
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ messsge: error.message });
    }
})

// Update a single post
router.put("/:id", auth, async (req, res) => {
    try {
        const { id } = req.params;
        if (!req.body.task) {
            return res.status(400).send({
                message: "Send task"
            })
        }

        const updateGoal = await Goal.findByIdAndUpdate(id, {task: req.body.task});

        if (!updateGoal) {
            return res.status(404).json({ message: "Book not found"});
            
        }
        console.log(req.body.task)
        return res.status(400).send({ message: "Goal Updated Successfully"})
    
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ messsge: error.message });
    }
})

export default router;