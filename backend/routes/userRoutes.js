import express from 'express';

import { createUser, loginUser, logoutUser } from '../controllers/userController.js';

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);

// // find all users
// router.get("/", async (req, res) => {
//     try {
//         const users = await User.find({});

//         return res.status(200).json(users);

//     } catch (error) {
//         console.log(error.message);
//         res.status(500).send({message: error.message});
//     }
// })

// // find a single user by id
// router.get("/:id" , async (req, res) => {
//     try {
//         const { id } = req.params;

//         const user = await User.findById(id);

//         return res.status(200).json(user);

//     } catch (error) {
//         console.log(error.message);
//         res.status(500).send({message: error.message});
//     }
// })

// // Update a single user
// router.put("/:id", async (req, res) => {
//     try {
//         if (!req.body.password || !req.body.name || !req.body.goals) {
//             return res.status(400).send({
//             message: 'Send all required fields: username, password, goals'
//             })
//         }
//         const { id } = req.params;

//         const result = await User.findByIdAndUpdate(id, req.body);

//         if (!result) {
//             return res.status(404).json({ message: "Book not found"});
//         }

//         return res.status(200).send({ message: "Book updated successfully" });
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).send({ message: error.message});
//     }
// })

// // Delete a user
// router.delete("/:id", async (req, res) => {
//     try {
//         const { id } = req.params;

//         const result = await User.findByIdAndDelete(id);

//         if (!result) {
//             return res.status(404).json({ message: "User not found"});
//         }

//         return res.status(200).send({ message: "User deleted successfully" });
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).send({ message: error.message });
//     }
// })



export default router;