import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv";
import bodyParser from "body-parser";

//routes
import shorting from "./routes/shorting.js";
import redirect from "./routes/redirect.js"

//config
const app = express();
dotenv.config();

//middleware
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//routes
app.use("/api", shorting);
app.use("/",redirect);

//mongoose and port connection
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    app.listen(process.env.PORT, () =>console.log(`Server running on port: ${process.env.PORT}`));
}).catch((err)=>console.log(err.message));