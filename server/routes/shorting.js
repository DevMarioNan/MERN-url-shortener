import express from "express";
import createHttpError from "http-errors";
import shortid from "shortid";
import URL from "../models/URL.js";
import { shortingUrl } from "../controllers/shorting.js";

const router = express.Router();

router.post("/", shortingUrl);


export default router;