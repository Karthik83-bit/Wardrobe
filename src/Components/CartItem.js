import axios from 'axios';
import React from 'react'
import '../Styles/cartitem.css'
import { StateProvider } from './StateProvider/StateProvider'
import { useStateValue } from './StateProvider/StateProvider'
import { Delete } from '@mui/icons-material';

function CartItem({item}) {
    const[state,dispatch]=useStateValue();
    const removeFromcart=async()=>{
       console.log( state.cart.filter(async(each)=>{
            console.log(item._id,each._id)
            return item._id!==each._id
               
            
          
        }))
        console.log("clicked")
        dispatch({
            type:"removeCart",
            payload:state.cart.filter(each=>{
                console.log(item._id,each._id)
                if(item._id!==each._id){
                    return item
                }
                
            })
        })
        await axios.post("http://localhost:4000/addtocart",{user_id:state.user._id,cart:state.cart}).then(res=>{
            console.log(res)
        })
    }
    console.log(item)
  return (
    <tr className='cart-item'>
    
    
    <td className='item-details'>
        <div className='item-img-wrap'>
            <img className='cart-item-img' src={item.product_image}/>
        </div>
        <div className='cart-product-cont'>
            <p>Product:<span>{item.product_name}</span></p>
            <p>Brand:{item.product_brand}</p>
            <Delete onClick={removeFromcart}/>
            
        </div>
       
        </td>
        <td><p>{item.product_count}</p></td>
        <td><p>100</p></td>
        <td><p>300</p></td>
    </tr>



  )
}

export default CartItem