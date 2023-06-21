import {React,useState} from 'react'
import {auth} from '../../config/FirebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate,Navigate } from 'react-router-dom'
import { reducer } from '../../Components/StateProvider/Reducer'
import { useStateValue } from '../../Components/StateProvider/StateProvider'
import signinimg from '../../images/SignIn.jpg'
// import { useStateValue } from './StateProvider'
import axios from 'axios'

// document.querySelector(".login-btn").addEventListener("click",()=>{

// })
// const[state,dispatch]=useStateValue();
function SignIn() {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    username:"",
   email:"",password:"",
   phone:"",
  })
  const [state,dispatch]=useStateValue();

  const formHandler=(e)=>{
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
  const signInHandler=async(e)=>{
    console.log(e)
    // e.preventDefault()
    e.preventDefault();
    console.log("hkjhk")
  
    createUserWithEmailAndPassword(auth,formData.email,formData.password).then(async(cred)=>{
      console.log(cred.user)
      console.log("user registered sucessfully")
     
      axios.post("http://localhost:4000/auth/signIn",formData).then(res=>{
        console.log(res)
        navigate("/login")
      }).catch(err=>{
        console.log(err)
        alert(err.message)
      })
      // await fetch("http://localhost:4000/auth/signIn", {
      //   Method: 'POST',
      //   // Headers: {
      //   //   Accept: 'application.json',
      //   //   'Content-Type': 'application/json'
      //   // },
      //   Body: JSON.stringify(),
      //   Cache: 'default'
      // }).then((user)=>{
      //   console.log(user.json)
      //   navigate("/")
      // })
      
    }).catch(err=>{
      console.log(err.message);
      alert(err.message)
    dispatch({
      type:"setError",
      payload:err,
    })
  })
    
  }

 console.log(state.error.Error)
 
  return (

    <div className='authpage'>
       
       {/* {state.error?<div>{state.error[0].}</div>:""} */}
  <section className='left-side'>
    <form className='form' onSubmit={signInHandler}>
    <h2>SignIn</h2>
    <div className='inp-wrap'>
        <input type="text" className='inp' name="username" required onChange={formHandler}  />
        <label className='inp-label' htmlFor='username'>Username</label>
        </div>
        <div className='inp-wrap'>
        <input type="email" className='inp' name="email" required onChange={formHandler}  />
        <label className='inp-label' htmlFor='email'>Email</label>
        </div>
        <div className='inp-wrap'>
        
        <input type="password" className='inp' name="password" required  onChange={formHandler} />
        <label className='inp-label' htmlFor='password'>Password</label>
        </div>
        <div className='inp-wrap'>
        <input type="text" className='inp' name="phone" required  onChange={formHandler} />
        <label className='inp-label' htmlFor='phone'>Phone</label>
        </div>
        <input type="submit" name="signIn-btn" className="login-btn" onClick={signInHandler}/>

    </form>
    </section>
    <section className='right-side'>
      <div className='right-img-wrap'>
        <img src={signinimg}></img>
      </div>
    </section>
   
    </div>
  )
}

export default SignIn
