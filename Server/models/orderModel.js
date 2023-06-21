import { Schema } from "@mui/icons-material";
import mongoose from "mongoose";
const orderSchema=mongoose.Schema({
    product:{
        type:[],
        required:true,
    },
    order_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'userModel'
        
    },
    to_address:{
        name:String,
        email:String,
        phone:Number,
        state:String,
        town:String,
        district:String,
        landmark:String,


    },
    date:{
        type:Date,
         
    }
})