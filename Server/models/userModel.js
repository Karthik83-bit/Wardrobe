import mongoose, { Schema } from "mongoose"
const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,

    },
    phone:{
        type:Number,
        required:true,
    },
    address:{
        type:String,

    },
    whishlist:{
        type:[mongoose.SchemaTypes.ObjectId],
        ref:"productsModel"
    },
    cart:[]
})
  const userModel=mongoose.model("userModel",userSchema);
  export default userModel