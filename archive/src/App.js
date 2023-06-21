import logo from './logo.svg';
import './App.css';
import {React,useState,useEffect }from 'react'
import { Routes,Route, } from 'react-router-dom';
import Commerce from '@chec/commerce.js'
import Home from './Components/Pages/Home';
// import Login from './Components/SignIn';
import NavBar from './Components/NavBar';
import ProtectedRoute from './Components/ProtectedRoute';
import Payment from './Components/Pages/Payment';
import Cart from './Components/Pages/Cart';
import NoPath from './Components/NoPath';
import Profile from './Components/Pages/Profile';
import WhishList from './Components/WhishList';
import { StateProvider } from './Components/StateProvider/StateProvider';
import Login from './Components/Pages/Login';
import SignIn from './Components/Pages/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';
import MensPage from './Components/Pages/MensPage';
import Product from './Components/Pages/Product';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/FirebaseConfig';
import { useStateValue } from './Components/StateProvider/StateProvider';
import axios from 'axios';
// import axios from 'axios';
import { menBrands, menCarouselImages, menCategories, womenCarouselImages, womenCategories } from './images/imageProvider';
import AdminPage from './Components/Pages/AdminPage';
import EditPage from './Components/Pages/EditPage'
import AddProduct from './Components/Pages/AddProduct';
import EditProduct from './Components/Pages/EditProduct';
import CategoriesProduct from './Components/Pages/CategoriesProduct'

const commerce=new Commerce("pk_479133c85b94be398ea4b589db75ca3ac0294f15d95ba",true);
const fetchProducts=async()=>{
 const {data}= await commerce.products.list()
 console.log(data);
}

fetchProducts()

// console.log(commerce.products.list().then(res=>console.log(res)))
// .then((res)=>{console.log(res.data.map(product=>product.name))});

function App() {
  const [first, setfirst] = useState([])
  const[state,dispatch]=useStateValue();
  // onAuthStateChanged(auth,async(user)=>{
  //   console.log("app")
  //   console.log(user.email)
  //   await axios.post("http://localhost:4000/auth/login",{email:user.email}).then(res=>{
  //     console.log(res)
  //     dispatch({
  //         type:'setUser',
  //         payload:res.data.usercred,
  //       })
  //       dispatch({
  //         type:'getCart',
  //         payload:res.data.usercred.cart,
  //       })
  // })
  
  // })
  // useEffect(() => {
  //   const url = new URL(
  //     "https://api.chec.io/v1/products"
  // );
  
  // const params = {
  //     "limit": "25",
  // };

  // Object.keys(params)
  //     .forEach(key => {
  //       // console.log(key+""+params[key]) 
  //       url.searchParams.append(key, params[key])});
  
  // const headers = {
  //     "X-Authorization": "sk_479135caa96d6d0aaa561619dbc1739d0da80922cee04",
  //     "Accept": "application/json",
  //     "Content-Type": "application/json",
  // };
  
  // fetch(url, {
  //     method: "GET",
  //     headers: headers,
  // })
  //     .then(res=>res.json()).then(rs=>console.log(rs));
  
  // }, [])
  
  return (
    <div className="App">
    <NavBar/>
       <Routes>

         <Route path='/' element={<Home/>}/> 
         <Route path='/signIn' element={<SignIn/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route element={<ProtectedRoute/>}>
         <Route element={<Profile/>} path='/profile'/>
          <Route path='/cart' element={<Cart/>}  />
          <Route path='/whishlist' element={<WhishList/>}  />
          <Route path="/payment" element={<Payment/>} />
          {/* <Route path="/cart" element={<Cart/>}/> */}
          
         </Route>
         <Route path="/profile" element={<Profile/>}/>
         <Route path="/men" element={<MensPage props={{gen:"men",sliderlImages:menCarouselImages,categories:menCategories}}/>}/>
         <Route path="/women" element={<MensPage props={{gen:"women",sliderlImages:womenCarouselImages,categories:womenCategories}}/>}/>
         
         <Route path="/men/:id"  element={<Product props={{gen:"Male"}}/>}/>
         <Route path="/women/:id"  element={<Product props={{gen:"Female"}}/>}/>
         
        <Route path="/products" element={<Product props={{gen:"Male"}}/>}/>
         <Route path="/admin" element={<AdminPage/>}/>
         <Route path='*' element={<NoPath/>}/>
         <Route path="/edit" element={<EditPage/>}/>
         <Route path="/add" element={<AddProduct/>}/>
         <Route path="/editProduct" element={<EditProduct/>}/>
         <Route path="/categories/:type" element={<CategoriesProduct/>}/>
      
        
      
       </Routes>
    </div>
  );
}

export default App;
