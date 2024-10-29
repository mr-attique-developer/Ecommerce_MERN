import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    discription:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    oldPrice:{
        type: Number,
    },
    image:{
        type: String,
        required: true
    },
    color:{
        type: String,
        
    },
    rating:{
        type: Number,
       default:0
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: true
    },
},{
    timestamps: true
})

const Product = mongoose.model("Product", productSchema)
export default Product