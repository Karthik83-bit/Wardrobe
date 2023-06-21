import { Router } from "express";
import productModel from "../models/productModel.js";

const router=Router();
router.get("/",(req,res)=>{
    res.send("hi working")
})
router.get("/:types",async(req,res)=>{
    await productModel.find({product_details:{$regex:`[. \\W \\w ]*${req.params.types}`}}).then(result=>
        res.json({msg:"jklfjkljlgk",items:result}))
  
})

export default router;