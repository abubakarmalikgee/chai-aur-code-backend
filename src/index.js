import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";
import { ApiResponce } from "./utils/apiResponse.js";

dotenv.config({ path: "./.env" });

// Connecting Database
connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("ERRR:", error);
            throw error;
        });

        app.listen(process.env.PORT || 8000, () => {
            console.log(
                ` Server is running at port : ${process.env.PORT || 8000}`
            );
        });
    })
    .catch((err) => {
        console.log("MONGO DB connnection FAILED !! ", error);
    });

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
