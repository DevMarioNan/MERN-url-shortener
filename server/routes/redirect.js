import express from "express"
import URL from "../models/URL.js"

const router = express.Router()

//routes 
router.get("/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const isExist = await URL.findOne({ shortUrl:id });

        
        if(!isExist) return res.json({ status:404,message: "Url not found" });
        
        if(isExist){
            
            res.status(301).redirect(isExist.fullUrl);
        }
    
    }catch(err){
        res.json({ message: err.message })
    }
})

export default router