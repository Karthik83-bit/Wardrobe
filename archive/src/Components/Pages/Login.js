import React from 'react'
import { useState } from 'react'
import { auth } from '../../config/FirebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useStateValue } from '../../Components/StateProvider/StateProvider'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import loginimg from '../../images/loginside.jpg'
import '../../Styles/Login.css'

function Login() {
    const [loginData, setLoginData] = useState({
        email:"",password:""
    })
    const navigate=useNavigate()
const [state,dispatch]=useStateValue()
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
            let pattern=/^[a-z A-z 0-9]{5,100}$/
            console.log(pattern.test(e.target.value))
            if(!pattern.test(e.target.value)){
                document.getElementsByName('password')[0].style.borderBottom="2px solid red"
            }
            if(pattern.test(e.target.value)){
                document.getElementsByName('password')[0].style.borderBottom="2px solid green"
            }
        }
        setLoginData({...loginData,[e.target.name]:e.target.value})
    }
    const loginHandler=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,loginData.email,loginData.password).then((cred)=>{
            console.log(cred.user.email);
            axios.post("http://localhost:4000/auth/login",{email:loginData.email}).then(res=>{
                console.log(res)
                dispatch({
                    type:'setUser',
                    payload:res.data.usercred,
                  })
                  dispatch({
                    type:'getCart',
                    payload:res.data.usercred.cart,
                  })
            })
           
              navigate("/")
        }).catch(err=>{
            alert(err)
        })

    }
  return (
    <div className='authpage'>
    <section className='left-side'>
    <form className='form'>
    <h1>Login</h1>
        <div className='inp-wrap  email-wrap'>
       
       
        <input className='inp' type="email" name="email" required onChange={formHandler} autoComplete="off"/>
        <label className='inp-label' htmlFor='email'>Email</label>
        
        </div>
       <div className='inp-wrap pswd-wrap'>
       <input className='inp' type="password" name="password" required  onChange={formHandler}/>
       <label className='inp-label' htmlFor='password'>Password</label>
       
        </div>
        <input type='submit' onClick={loginHandler} name="Login" placeholder='Login' value='LogIn'/>
    </form>
    </section>
    <section className='right-side'>
        <div className='right-img-wrap'>
            <img  src={loginimg}/>
        </div>
    </section>
    </div>
  )
}

export default Login