import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from 'dotenv';
dotenv.config();

const uri : string | undefined = process.env.MONGODB_URI;

class Database {
    private uri : string;

    constructor(uri : string) {
        if(!uri) {
            throw new Error("mongoDB URI is not defined.");
        }

        this.uri = uri;
    }

    async connect() {
        try {
            const connectionInstance = await mongoose.connect(`${this.uri}/${DB_NAME}`);
            console.log(`\nMongoDB connection successfull DB-HOST : ${connectionInstance.connection.host}`);
        } catch (error) {
            console.error('MongoDB connection failed !! ERROR ', error);
            process.exit(1);
        }
    }
}

export default new Database(uri!);