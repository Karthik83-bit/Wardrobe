import axios from 'axios'
import React, { useState } from 'react'
import '../Styles/productcard.css'
import { useStateValue } from '../Components/StateProvider/StateProvider'
import {AddCircle, ArrowDropUp} from "@mui/icons-material"
import { Star } from '@mui/icons-material'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ArrowDropDown } from '@mui/icons-material'
import { Link } from 'react-router-dom'



function ProductCard({props}) {
    const [Sizeshow, setSizeshow] = useState(false)
    const navigate=useNavigate();
  const[state,dispatch]=useStateValue()
    const addToCart=async(e)=>{
        console.log(e)
            if(!state.user){
                navigate("/login")
            }
            else{
                console.log(state.cart)
                let newproduct=true;
                if(state.cart.length==0){
                    dispatch({
                        type:"setCart",
                        payload:{...props,product_count:1}
                    })
                   
                }else{
                    let arr=[]
                    // arr=[...state.cart]
                  
                state.cart.map(item=>{
                    console.log(props._id==item._id)
                    if(props._id==item._id){
                        newproduct=false;
                        console.log("hello",item.product_count)
                        item.product_count=item.product_count+1;
                    
                    }
                })
                }
                if(newproduct&&state.cart.length!=0){
                    dispatch({
                        type:"setCart",
                        payload:{...props,product_count:1}
                    })
                }

                 await axios.post("http://localhost:4000/addtocart",{user_id:state.user._id,cart:state.cart}).then(res=>
                console.log(res)).catch(err=>{
                    console.log(err)
                })
                navigate("/cart")
                
   } }
   const showSize=()=>{
    console.log("click")
   setSizeshow(!Sizeshow)
   console.log(Sizeshow)
   }
    // console.log(props.product_image)
  return (
    <div className='product-card'>
    <div className='product-card-decor wood-decor' style={props.product_gender='Male'?{border:"2px solid yellow"}:""}>

    </div>
    <div className='product-card-decor white-decor'>

</div>

        <div className='product-img-wrap'>
            <img className='product-img' src={props.product_image}/>
        <div className='product-row-wrap'>
            <div className='product-row'>
                <h5 style={{margin:"0",fontSize:"22px"}}>{props.product_name}</h5>
                <p style={{fontSize:"1.1em",margin:"0"}}>{props.product_brand}</p>
            </div>
            <div className='product-row size-row' >
            <p>sizes{Sizeshow?<ArrowDropDown onClick={showSize}/>:<ArrowDropUp  onClick={showSize} />}</p>
                <div className='size-wrap' style={Sizeshow?{display:'flex'}:{display:'none'}}>{props.product_size.map(item=><p className='size-cont' >{item}</p>)}</div>
            </div>
            <div className='product-row'>
                <div><Star/>{props.product_rating.length>8?"4.0|12k":props.product_rating}</div>
            </div>
            <div className='product-row button-row'>
                <button className='add_button' onClick={addToCart}>ADD to CART</button>
                <div >
                    <p>Rs.<span style={{fontSize:"2.5em",fontWeight:"600"}}>{props.product_price}</span></p>
                    <p style={{textDecoration:"line-through",textAlign:"right"}}>{props.product_orgprice}</p>
                </div>
            </div>
            </div>
            {/* 
            
            <div className='cont-row cr1'>
            <p className='product-name'>{props.product_name}</p>
            <div style={{display:"flex",width:"100%", justifyContent:"space-between"}}>
            <div >
            <div style={{display:"flex"}}>
            <Star/>
            <p>{props.product_ratings}</p>
            
            </div>
            
            <div className='product-price'>
            <p1 className="product-orgprice">{props.product_price}</p1>
            <p1 className="product-strike">{props.product_orgprice}</p1>
            </div>
           
            </div>
            <div className='button-wrap'>
             <AddCircle className='cart' style={{ fontSize: "60px",marginLeft:"5px"}} onClick={addToCart}/>
             <div>
            </div>
            </div>
            
           
          

             </div>

        </div> */}
        

        </div>
       
       

    </div>
  )
}

export default ProductCard