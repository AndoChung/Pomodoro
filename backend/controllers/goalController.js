import { Goal } from "../models/goalModel.js";

export const createGoal = async (req, res) => {
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
}

export const getGoals = async (req, res) => {
    try{
        const goals = await Goal.find({ author : req.user })
        res.status(201).send(goals)
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ messsge: error.message });
    }
}

export const updateGoal = async (req, res) => {
    try {
        const { id } = req.params;
        if (!req.body.task) {
            return res.status(400).send({
                message: "Send task"
            })
        }

        const updateGoal = await Goal.findByIdAndUpdate(id, {task: req.body.task});

        if (!updateGoal) {
            return res.status(404).json({ message: "Goal not found"});
            
        }
        return res.status(200).send({ message: "Goal Updated Successfully"})
    
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ messsge: error.message });
    }
}

export const deleteGoal = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedGoal = await Goal.findByIdAndDelete(id);

        if (!deletedGoal) {
            return res.status(404).json({ message: "Goal not found"})
        }
        
        return res.status(200).send({ message: "Goal Successfully Deleted"})
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ messsge: error.message });
    }
    
}