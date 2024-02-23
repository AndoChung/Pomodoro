import express from "express";
import { PORT, mongoDBURL} from "./config.js"
import mongoose from "mongoose";

const app = express();

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