import express from "express";
import cors from "cors";


import { PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import goalRoutes from "./routes/goalRoutes.js";


const app = express();

app.use(cors({
    origin: 'https://pomodoro-kdu4.onrender.com/',
    methods: ['GET','POST','PUT','DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type']
}))

app.use(express.json());

app.use("/user", userRoutes);
app.use("/goal", goalRoutes);

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
