import mongoose from "mongoose"
import shortid from "shortid"

const urlSchema = mongoose.Schema({
    fullUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true,
        default: shortid.generate
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    }
}, { timestamps: true });

const Url = mongoose.model("Url", urlSchema);

export default Url;