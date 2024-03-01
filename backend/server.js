import express from "express";
import { PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js"


const app = express();

app.use(express.json());

app.use("/user", userRoutes);

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