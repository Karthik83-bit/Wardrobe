import { Router } from "express";
import mongoose from "mongoose";
import userModel from "../models/userModel.js";

const router=Router();
router.get("/signIn",(req,res)=>{
res.send("jkfjjkj")
})
router.post("/signIn",async(req,res)=>{
    const usermodel=new userModel(req.body)
    console.log(req.body)

    await usermodel.save((err,uer)=>{
        if(err)console.log(err);
        else{
            console.log(uer);
        }
    })
    res.status(200).json({msg:"kjhjkfjkljlkflkl;fkl;"});

})

router.post("/login",async(req,res)=>{
    console.log(req.body.email)
    await userModel.findOne({email:req.body.email}).then((user)=>{
        // console.log(user)
        if(user){
            console.log(user)
            res.status(200).json({
                usercred:user
            })
        }
        else{
            
            res.json({msg:"error ocuured"})
        }

       
    }).catch(err=>console.log(err))
})
export default router