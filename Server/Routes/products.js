import { Router } from "express";
import productModel from "../models/productModel.js";
import{ data} from '../data/dataProducts.js'

const router=Router();

router.get("/",async(req,res)=>{
    // productModel.aggregate()
    
     await productModel.find().then(result=>{
        res.status(200).json({msg:"suceesfully loaded",item:result.splice(0,40)})
     })
   
})





router.get("/:category",async(req,res)=>{
    // console.log(req.params.id)
    // console.log(req.params.category=="recentlyAdded");
    if(req.params.category=="recentlyAdded"){
        await productModel.find().sort({product_createdAt:-1}).limit(20).then(result=>{
            res.status(200).json({msg:"suceesfully loaded",item:result.splice(10,20)})
         })
    }
    if(req.params.category=="heavyDiscount"){
        await productModel.find({product_orgprice:{$gte:500,$lt:900}}).then(result=>{
            res.json({msg:"jygjhkjliyts",items:result.splice(10,30)});
        })
    }
    
       
       
        // res.json({msg:"sucessful",items:});

    

    // await productModel.find({product_forgender:req.params.category}).then(result=>{
    //     // console.log(result)
    //     res.json({item:result});
    // })

    
    
})






router.get("/home/product/category/:type",async(req,res)=>{

})




router.get("/home/product/price",async(req,res)=>{
  
   
})



router.get("/:category/:type",async(req,res)=>{
    console.log(req.params)
// res.send("jhjkk,j");
    await productModel.find( {$and:[{product_gender:req.params.category},{product_details:{$regex:`^${req.params.type}`,}}]}).then(result=>{
        console.log(result)
        
        res.json({item:result});
    })
    
    
    
})

router.post("/",async(req,res)=>{
   console.log(data)

    try {
        console.log(req.body)
        // productModel.insertMany({product_name:"Men Cotton Pure Cotton T-shirt",product_brand:"Roadster",product_sizes:"Sizes: XS, S, M, L, XL, XXL, 3XL, 4XL",product_forgender:"Male",product_details:"tshirts/roadster/roadster-men-black-cotton-pure-cotton-t-shirt/1996777/buy",product_price:"Rs. 209Rs. 499(58% OFF)",product_ratings:"4.2|19.4k",product_image:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1996777/2017/11/7/11510046815437-Roadster-Men-Black-Solid-Round-Neck-T-shirt-4011510046815294-4.jpg"},
        // );
        // productModel.insertOne({product_name:"Men Cotton Pure Cotton T-shirt",product_brand:"Roadster",product_sizes:"Sizes: XS, S, M, L, XL, XXL, 3XL, 4XL",product_forgender:"Male",product_details:"tshirts/roadster/roadster-men-black-cotton-pure-cotton-t-shirt/1996777/buy",product_price:"Rs. 209Rs. 499(58% OFF)",product_ratings:"4.2|19.4k",product_image:"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1996777/2017/11/7/11510046815437-Roadster-Men-Black-Solid-Round-Neck-T-shirt-4011510046815294-4.jpg"},
        // );
        
         productModel.insertMany(req.body).then((response)=>{
                console.log(response)
                res.status(200).json({status:"200",msg:"product has been sucessfully uploaded"})
         });
        // console.log(res);
       
    } catch (error) {
        console.log(error)
    }
   
    
})


router.delete("/:id",async(req,res)=>{
    console.log(req.params);
    console.log(req.body)
    await productModel.findByIdAndDelete(req.params.id).then(result=>{
        console.log(result)
    if(result){
        res.status(200).json({msg:"product has been sucessfully deleted"})
    }
    else{
        res.status(500).json({msg:"cannot be deleted"})
    }
    }).catch(err=>{
        console.log(err)
    })
})

export default router;


