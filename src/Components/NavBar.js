import React from 'react'
import {NavLink} from 'react-router-dom'
import style from '../Styles/nav.css'
import { useStateValue } from '../Components/StateProvider/StateProvider'
import { signOut } from 'firebase/auth'
import { auth } from '../config/FirebaseConfig'
import { AccountCircle,ShoppingCart} from '@mui/icons-material'
import { Delete } from '@mui/icons-material'
import logoo from '../images/logo.svg'

const navStyle={
    textDecoration:"none",
    color:"white"
}
const iconStyle={fontSize:"35px"}

function NavBar() {
    const [state,dispatch]=useStateValue();
  return (
    <div className='navbar' style={style}>
     <div className='logo-wrap nav-section'>
<NavLink style={navStyle} to="/">
    {/* <logoo/> */}
    <div className='logo-wrap'>
    <img className='logo' src={logoo}/>
    </div>
</NavLink>
   
    </div>

    <div className='pg-links-wrap nav-section'>
        <NavLink style={navStyle} to='/men'>MEN</NavLink>
        <NavLink style={navStyle} to='/women'>WOMEN</NavLink>
        <NavLink style={navStyle} to='/kids'>KIDS</NavLink>
    </div>

    <div className='src-wrap nav-section'>
        <input className='src' type='text' name='src' placeholder='Search Products'/> 
    </div>

    <div className='user-info-wrap nav-section'>
    {state.user?<NavLink className='profile' to="/profile" style={navStyle} >
    <div className='profile-hover' >
        <NavLink to="/orders" style={navStyle} >Orders</NavLink>
        <NavLink style={navStyle} to="/whishlist">WhishList</NavLink>
        <button onClick={()=>{
        console.log("hello")
        signOut(auth).then(()=>{
            console.log("signedout")
        })
        dispatch({
            type:'delCart'
        })
        dispatch({
            type:"delProduct"
        })
        dispatch({
            type:'delUser',
            payload:null
        })
    }}>SignOut</button>
    </div>

    <AccountCircle style={iconStyle}/>
    <div>
        <p>{state.user.username}</p>
    </div>
    </NavLink>:<NavLink style={navStyle} to='/signIn'>SignIn</NavLink>}
    <NavLink style={navStyle} to="/login">LogIn</NavLink>
  
    <NavLink style={{...navStyle,position:"relative"}} to='/cart'>{state.cart.length!=0?<div className='cart-notify'>{state.cart.length}</div>:""}<ShoppingCart style={iconStyle}></ShoppingCart></NavLink>
    </div>
      
    </div>
  )
}

export default NavBar
