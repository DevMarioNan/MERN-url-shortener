import express from "express"
import URL from "../models/URL.js"
import { redirectUrl } from "../controllers/redirect.js"

const router = express.Router()

//routes 
router.get("/:id", redirectUrl)

export default router