import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useStateValue } from '../../Components/StateProvider/StateProvider'
import CartItem from '../CartItem';
import {useNavigate} from 'react-router-dom'
import '../../Styles/cart.css'
import upi from '../../images/upi.png'
import { AccountBalance,AccountBalanceWallet,CreditCard } from '@mui/icons-material';


function Cart() {
  const navigate=useNavigate()
  const [state,dispatch]=useStateValue();
  useEffect(() => {
console.log(state.user._id)
  axios.get(`http://localhost:4000/addtocart/${state.user._id}`,{id:state.user._id}).then(res=>{
    dispatch({
      type:"setCart",
      payload:res.data,
    })
  })
   
  }, [])
  console.log(state)
  return (
    <div className='cart-page'>
      <section className=''>
        <div className='cart-content'>
          <p>CART</p>
        </div>
        <div className='cart-items-wrap'>
        <table style={{margin:"2px solid black"}}>
    <tr>
    <th style={{width:"500px"}}>Product details</th>
    <th>Quantity</th>
    <th>Price</th>
    <th>Total</th>
    </tr>
        {state.cart.map(item=>
  
          <CartItem item={item}/>
    
        )}
        </table>
        </div>
      </section>
      <section className='cart-right'>
        <div className='payment-info'>
          <p>OrderSummary</p>
          <div style={{display:"flex",padding:"10px",justifyContent:"space-between",width:"100%"}}>
            <p>Items{state.cart.length}</p>
            <p>Total:300</p>
          </div>
          <div className='order-form'>
          
            <form method=''>
            <label className='addr-label ' htmlFor='adress'>Adress</label>
            <textarea type='textarea' name="address" />
            <div className='payment-mode-wrap'>
            <p>ModeOfPayment</p>
            <div>
            <div >
            
              <input type="radio" value="upi" name="modeOfPayment" />
              <label htmlFor='upi'><img className='upi-img' src={upi}/></label>
              </div>
              <div>
              <input type="radio"  value="onlinebanking" name="modeOfPayment" />
              <label htmlFor=''><AccountBalance/></label>
              </div>
              <div>
              <input type="radio" value="cashondelivery" name="modeOfPayment" />
              <label><AccountBalanceWallet/></label>
              </div>
              <div>
              <input type="radio"  value="debitcard" name="modeOfPayment" />
              <label><CreditCard/></label>
              </div>
              </div>
              </div>
              <input type='submit' onClick={(e)=>{
                e.preventDefault()
                navigate("/payment")
                }} value="CheckOut" />
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cart
