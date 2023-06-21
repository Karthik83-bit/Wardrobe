import logo from './logo.svg';
import './App.css';
import {React,useState,useEffect,lazy, Suspense }from 'react'
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
import { kidcarousel } from './images/imageProvider';
import { kidcateg } from './images/imageProvider';
import axios from 'axios';
// import axios from 'axios';
import { menBrands, menCarouselImages, menCategories, womenCarouselImages, womenCategories } from './images/imageProvider';
import AdminPage from './Components/Pages/AdminPage';
import EditPage from './Components/Pages/EditPage'
import AddProduct from './Components/Pages/AddProduct';
import EditProduct from './Components/Pages/EditProduct';
import CategoriesProduct from './Components/Pages/CategoriesProduct'
import SpinnerReact from './Components/Pages/SpinnerReact';

const commerce=new Commerce("pk_479133c85b94be398ea4b589db75ca3ac0294f15d95ba",true);
const fetchProducts=async()=>{
 const {data}= await commerce.products.list()
 console.log(data);
}

fetchProducts()

// console.log(commerce.products.list().then(res=>console.log(res)))
// .then((res)=>{console.log(res.data.map(product=>product.name))});
const LazySignIn=lazy(()=>import('./Components/Pages/SignIn'))
const LazyPayment=lazy(()=>import('./Components/Pages/Payment'))
const LazyProfile=lazy(()=>import('./Components/Pages/Profile'))
const LazyCart=lazy(()=>import('./Components/Pages/Cart'))
const LazyLogIn=lazy(()=>import('./Components/Pages/Login'))
const LazyMensPage=lazy(()=>import('./Components/Pages/MensPage'))
const LazyProduct=lazy(()=>import('./Components/Pages/Product'))
const LazyAdminPage=lazy(()=>import('./Components/Pages/AdminPage'))
const LazyAddProduct=lazy(()=>import('./Components/Pages/AddProduct'))
const LazyEditProduct=lazy(()=>import('./Components/Pages/EditProduct'))
const LazyEditPage=lazy(()=>import('./Components/Pages/EditPage'))
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
         <Route path='/signIn' element={<Suspense fallback={<SpinnerReact/>}><LazySignIn/></Suspense>}/>
         <Route path='/login' element={<Suspense fallback={<SpinnerReact/>}><LazyLogIn/></Suspense>}/>
         <Route element={<ProtectedRoute/>}>
         <Route element={<Suspense fallback={<SpinnerReact/>}><LazyProfile/></Suspense>} path='/profile'/>
          <Route path='/cart' element={<Suspense fallback={<SpinnerReact/>}><LazyCart/></Suspense>}  />
          <Route path='/whishlist' element={<Suspense fallback={<SpinnerReact/>}><WhishList/></Suspense>}  />
          <Route path="/payment" element={<Suspense fallback={<SpinnerReact/>}><LazyPayment/></Suspense>} />
          {/* <Route path="/cart" element={<Cart/>}/> */}
          
         </Route>
         <Route path="/profile" element={<Suspense fallback={<SpinnerReact/>}><LazyProfile/></Suspense>}/>
         <Route path="/men" element={<Suspense fallback={<SpinnerReact/>}><LazyMensPage props={{gen:"men",sliderlImages:menCarouselImages,categories:menCategories}}/></Suspense>}/>
         <Route path="/women" element={<Suspense fallback={<SpinnerReact/>}><LazyMensPage props={{gen:"women",sliderlImages:womenCarouselImages,categories:womenCategories}}/></Suspense>}/>
         <Route path="/kids" element={<Suspense fallback={<SpinnerReact/>}><LazyMensPage props={{gen:"kids",sliderlImages:kidcarousel,categories:kidcateg}}/></Suspense>}/>
        
         <Route path="/men/:id"  element={<Suspense fallback={<SpinnerReact/>}><LazyProduct props={{gen:"Male"}}/></Suspense>}/>
         <Route path="/women/:id"  element={<Suspense fallback={<SpinnerReact/>}><LazyProduct props={{gen:"Female"}}/></Suspense>}/>
         <Route path="/kids/:id"  element={<Suspense fallback={<SpinnerReact/>}><LazyProduct props={{gen:"Kids"}}/></Suspense>}/>
         
        <Route path="/products" element={<Suspense fallback={<SpinnerReact/>}><LazyProduct props={{gen:"Male"}}/></Suspense>}/>
         <Route path="/admin" element={<Suspense fallback={<SpinnerReact/>}><LazyAdminPage/></Suspense>}/>
         <Route path='*' element={<NoPath/>}/>
         <Route path="/edit" element={<Suspense fallback={<SpinnerReact/>}><LazyEditPage/></Suspense>}/>
         <Route path="/add" element={<Suspense fallback={<SpinnerReact/>}><LazyAddProduct/></Suspense>}/>
         <Route path="/editProduct" element={<Suspense fallback={<SpinnerReact/>}><LazyEditProduct/></Suspense>}/>
         {/* <Route path="/categories/:type" element={<LazyCategoriesProduct/>}/> */}
      
        
      
       </Routes>
    </div>
  );
}

export default App;
