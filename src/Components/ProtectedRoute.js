import React from 'react'
import {Outlet,Navigate} from 'react-router-dom'
import {auth} from '../config/FirebaseConfig'
import { useStateValue } from '../Components/StateProvider/StateProvider'



function ProtectedRoute() {
  
  const[state,dipatch]=useStateValue()
    const isAuth=()=>{if(state.user){
      console.log(state.user)
      return true}else return false;}
    console.log(<Outlet/>)
    // console.log(state.user.user)
  return (
    <div>
      {isAuth()?<Outlet/>:<Navigate to='/login'/>}
    </div>
  )
}

export default ProtectedRoute
