import axios from "axios";
import { Router } from "express";
import userModel from "../models/userModel.js";

// const arr=[];
// arr.

const router=Router()

router.get("/:user",async(req,res)=>{
    console.log(req.params)

})
router.post("/",async(req,res)=>{
    let cartExist=false;
    console.log("this")
    console.log(req.body)
    // await userModel.findById(req.body.user_id).then((user)=>{
    //     console.log(user)
    // })

            await userModel.findOneAndUpdate({_id:req.body.user_id},{$set:{cart:req.body.cart}}).then((response)=>{
                
    
            console.log(response)
   
        
       
            }).catch(err=>{
                console.log(err)
            })
    
   
    })
export default router;
