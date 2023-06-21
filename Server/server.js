import express, { application, urlencoded } from "express"
import mongoose  from "mongoose"
import cors from "cors"
import postRouter from "./Routes/products.js";
import authRouter from "./Routes/authenticationRoutes.js";
import cartRouter from "./Routes/addtocartRoute.js"
import adminRouter from "./Routes/AminRoute.js"
import categoryRouter from "./Routes/category.js"

const app=express()
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(cors())
app.use("/products",postRouter) 
app.use("/auth",authRouter)
app.use("/addtocart",cartRouter)
app.use("/admin",adminRouter)
app.use("/categories",categoryRouter)

await mongoose.connect("mongodb+srv://karthik38bit:K1rt89k83@cluster0.oeptiec.mongodb.net/?retryWrites=true&w=majority").then(
    console.log("connected"),
    

).catch((err)=>console.error(err))



app.get("/",(req,res)=>{
    console.log("kmlkfvlk;l");
    res.send("hello");
})
app.listen("4000",()=>{
    console.log("kjfkfjkjf")

})


 

