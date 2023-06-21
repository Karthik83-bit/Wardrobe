import React from 'react'
import '../../Styles/profile.css'
import { useState } from 'react';
import { stateContext, useStateValue } from '../StateProvider/StateProvider'
import { Edit,Person } from '@mui/icons-material';


function Profile() {
  const setEditable=()=>{
    alert("gj")
    console.log( document.getElementsByTagName('input'))
    // Array.prototype.map.call(document.getElementsByTagName('input'),item=>{
    //   console.log(item)
    //   item.removeAttribute("readonly")
    // })
    for(let i=0;i<document.getElementsByTagName("input").length;i++){
      document.getElementsByTagName("input")[i].removeAttribute("readonly")
      document.getElementsByTagName("input")[i].style.borderBottom="1px solid white";
    }
    document.querySelector(".pr-submit").style.display="block";

}
  const[state,dispatch]=useStateValue();
  const [formData, setFormData] = useState({
    username:state.user.username,
    password:state.user.password,
   email:state.user.email,
   phone:state.user.phone,
  })
  const formHandler=(e)=>{
    // alert(e)
    
    if([e.target.name]=='email'){
      let pattern=/^[a-z A-Z 0-9]+@gmail.com$/
      console.log(pattern.test(e.target.value))
      if(!pattern.test(e.target.value)){
          document.getElementsByName('email')[0].style.borderBottom="2px solid red"
      }
      if(pattern.test(e.target.value)){
          document.getElementsByName('email')[0].style.borderBottom="2px solid green"
      }
  }
  if([e.target.name]=='password'){
      let pattern=/^[a-z A-z /d ]{5,100}$/
      console.log(pattern.test(e.target.value))
      if(!pattern.test(e.target.value)){
          document.getElementsByName('password')[0].style.borderBottom="2px solid red"
      }
      if(pattern.test(e.target.value)){
          document.getElementsByName('password')[0].style.borderBottom="2px solid green"
      }
  }
  if([e.target.name]=='phone'){
    let pattern=/^[0-9]{10}$/
    console.log(pattern.test(e.target.value))
    if(!pattern.test(e.target.value)){
        document.getElementsByName('phone')[0].style.borderBottom="2px solid red"
    }
    if(pattern.test(e.target.value)){
        document.getElementsByName('phone')[0].style.borderBottom="2px solid green"
    }
}
    e.preventDefault()
    setFormData({...formData,[e.target.name]:e.target.value})
    
  }
  console.log(state.user)
  return (
    <div className='profile-page page'>
    <p className='head'>Profile/</p>
    
      <section className="profile-page-left">
      <Person className='user-img' style={{fontSize:"200px"}}/>
        <form  className='profile-form'>
        <label>Name:</label>
          <input type="text" name="username" value={formData.username} onChange= {formHandler} autoCapitalize readOnly autoComplete='off'/>
          <label>Email:</label><input type="email" name="email" value={formData.email} onChange= {formHandler} autoCapitalize readOnly autoComplete='off'/>
          <label>Phone: </label><input type="text" name="phone" value={formData.phone} onChange= {formHandler} autoCapitalize readOnly autoComplete='off'/>
          {/* <input type="text" name="username" value={formData.username} onChange= {formHandler} autoCapitalize readOnly autoComplete='off'/> */}
          <Edit className='edit-btn' onClick={setEditable}/>
          <input className='pr-submit
          ' type="submit" value="SaveChanges"/>
        </form>
      </section>
      <section className="profile-page-right">
        <div className='header-wrap'>
          <p>WhishList</p>
          <p>Orders</p>
          <p>Cart  </p>
        </div>
      </section>
    </div>
  )
}

export default Profile
