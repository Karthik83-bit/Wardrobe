import mongoose from "mongoose";
// import { v4 } from "uuid";
const productSchema=mongoose.Schema({
    product_id:mongoose.Schema.Types.ObjectId,

    product_name:{
        type:String,
        required:true,
    },

    product_brand:{
        type:String,
        required:true,
    },

    product_size:{
        type:[],
        required:true,

    },

    product_gender:{
        type:String,
        required:true,
    },

    product_details:{
        type:String,
        required:true,

    },

    product_price:{
        type:Number,
        required:true,
    },
    product_orgprice:{
        type:Number,
    
    },

    product_rating:{
        type:String,
        // required:true,
    },

    product_image:{
        type:String,
        required:true,
    },
    product_createdAt:{
        type:Date,
        default:new Date()
    }


})
const productModel=mongoose.model("productsModel",productSchema);
export default productModel 
