import express from "express";
import createHttpError from "http-errors";
import shortid from "shortid";
import URL from "../models/URL.js";

const router = express.Router();

router.post("/", async (req, res,next) => {
    
    try{
        let { url } = req.body;
        
        if(!url) res.json({ status:400,message: "Provide a Valid Url" });

        if(!url.includes("http://") || !url.includes("https://")){
            url = `https://${url}`;
        }

        const isExist = await URL.findOne({ fullUrl:url }); 

        if(isExist) return res.json({ 
            fullUrl:isExist.fullUrl,
            shortUrl: `${req.headers.host}/${isExist.shortUrl}`,
            clicks: isExist.clicks,
            createdAt: isExist.createdAt,
        });

        const shortUrl = new URL({
            fullUrl: url,
            shortUrl: shortid.generate(),
        });

        const result = await shortUrl.save();
        return res.json(result);

    }catch(err){
        res.json({ message: err.message })
    }
});


export default router;