import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });

connectDB();

// Basic Approach to Connect to Database in Main server file
/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";


import express from "express";
const app = express();

(async () => {
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        app.on("error", (error) => {
            console.log("ERRR:", error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.log("ERROR: ", error);
        throw err;
    }
})();
*/
