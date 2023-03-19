import URL from "../models/URL.js";

export const redirectUrl = async (req, res) => {
    try{
        const { id } = req.params;
        const isExist = await URL.findOne({ shortUrl:id });

        
        if(!isExist) return res.json({ status:404,message: "Url not found" });
        
        if(isExist){
            await URL.findOneAndUpdate({ shortUrl:id }, { $inc: { clicks: 1 } });
            res.status(301).redirect(isExist.fullUrl);
        }
    
    }catch(err){
        res.json({ message: err.message })
    }
}