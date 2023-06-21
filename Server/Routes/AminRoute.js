import { Router } from "express";
import productModel from "../models/productModel.js";


const router=Router();
router.post("/",async (req,res)=>{
    // console.log(req.query)
    console.log("hjhk",req.body)  
   const result= await productModel.find({product_name:req.body.product_search})
    console.log(result)
    // res.json(result)
    if(result.length!=0){
        res.json(result);
    }
    else{
        if(req.body.product_search.split(" ").length>1){
            await productModel.find({product_details:{$regex:`[. \\W \\w]*${req.body.product_search.split(" ")[1]}[. \\W \\w]*${req.body.product_search.split(" ")[0]}[. \\w\\W]*`}}).then((result=>res.json(result)))
        }
        // console.log(`[. \\W \\w]*${req.body.product_search.split(" ")[1]}[. \\W \\w]*${req.body.product_search.split(" ")[0]}[. \\w\\W]*`)
       else{ await productModel.find({product_details:{$regex:`[. \\W \\w]*${req.body.product_search.split(" ")[0]}[. \\w\\W]*`}}).then((result=>res.json(result))) } 
       // c}onsole.log(result)

        

    }

//    await productModel.updateOne(req.body.filter,{ $set: JSON.parse( req.body.updatedValue)}).then(result=>{
//         console.log(result)
//     })
    await productModel.find(req.body.filter).then(result=>{
        // console.log(result)
    })
})

router.patch("/",async(req,res)=>{
    console.log(req.body)
    await productModel.findByIdAndUpdate(req.body.id,req.body.productdet).then(result=>
       {
        if(result)res.status(200).json({msg:"sucessfully updated"})
        else{
            res.status(500)({msg:"error occured"})
        }
       }
    
    
    ).catch(err=>console.log(err))

})
export default router