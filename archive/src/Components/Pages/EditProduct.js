import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {getStorage,getDownloadURL,ref,uploadBytesResumable} from 'firebase/storage'
import { useStateValue } from '../StateProvider/StateProvider'
import { useLocation, useSearchParams } from 'react-router-dom'
import { ConstructionOutlined, SatelliteAlt } from '@mui/icons-material'

function EditProduct() {
   
   const{state}=useLocation();
    console.log(state)
    const storage=getStorage()
   const [searchParams,setSearchParams]=useSearchParams();

    const [Size, setSize] = useState({
        "S":false,
       "M":false,
       "L":false,
       "XL":false


    })
    const [progress, setProgress] = useState()
    const [percentage, setPercentage] = useState();
    const [product,setProduct]=useState({
        product_name:state.product_name,
        product_brand:state.product_brand,
        product_details:state.product_details,
        product_gender:state.product_gender,
        product_size:state.product_size,
        product_price:state.product_price,
        product_orgprice:state.product_orgprice,
        product_image:state.product_image,
        product_rating:state.product_rating,

    })
    const handleChange=(e)=>{
        setProduct({...product,[e.target.name]:e.target.value})
        
    }
    const submitHandler=async(e)=>{
        e.preventDefault();
        console.log("clicked")
        for(let key of Object.keys(Size)){
            if(Size[key]){
                setProduct({...product,product_size:[...product.product_size,key]});
                console.log(product);
            }
        }
        console.log(product);
        // setSearchParams(product)
        // await axios.post("http://localhost:4000/products",searchParams).then((res)=>{
        //     console.log(res)
        // })
        await axios.patch("http://localhost:4000/admin",{productdet:product,id:state._id}).then(result=>alert(result.data.msg))
    }
    const checkboxHandler=(e)=>{
        setSize({...Size,[e.target.value]:e.target.checked})
        // sizes[e.ta bjmrget.value]=e.target.checked
        
        console.log(Size)

    }
    const fileSubmitHandler=(e)=>{
        console.log(e.target.files[0].name)
        const imgfile=e.target.files[0];
        const storage=getStorage()
        console.log(imgfile.name)
        const storefRef=ref(storage,imgfile.name)
     
       const upload= uploadBytesResumable(storefRef,`images/${imgfile}`)
       upload.on('state_changed',(snap)=>{
        let percentage=(snap.bytesTransferred/snap.totalBytes)*100
        setPercentage(percentage)
       },(err)=>{
        console.log(err)
       },async()=>{
       const url= await  getDownloadURL(storefRef)
       console.log(url)
       setProduct({...product,product_image:url})
       })
    }

  return (
    <div  className='admin-page'>
         <form className='form' method='POST'>
         <input type='text' name="product_name" className="product_name" placeholder="ProductName" onChange={handleChange} value={product.product_name}/>
         <input type="text" name="product_brand" className="product_brand" placeholder="ProductBrand" onChange={handleChange} value={product.product_brand}/>
         <input type="text" name="product_details" className="product_details" placeholder="ProductDetails" onChange={handleChange} value={product.product_details}/>
         <div className='productGenderWrap' style={{display:"flex"}}>
            <p>Male</p><input type="radio" value="male" name="product_gender" className="product_gender" onChange={handleChange} />
            <p>FeMale</p><input type="radio" value="female" name="product_gender" className="product_gender" onChange={handleChange} />
         </div>
         <div className='productSizeWrap' style={{display:"flex"}}>
            <p>S</p><input type="checkbox" value="S" name="product_size" className="product_size" onChange={checkboxHandler}/>
            <p>M</p><input type="checkbox" value="M" name="product_size" className="product_size"  onChange={checkboxHandler}/>
            <p>L</p><input type="checkbox" value="L" name="product_size" className="product_size" onChange={checkboxHandler}/>
            <p>XL</p><input type="checkbox" value="XL" name="product_size" className="product_size" onChange={checkboxHandler}/>
         </div>
         <input type="text" name="product_price" className="product_price" placeholder="Productprice" onChange={handleChange} value={product.product_price}/>
         <input type="text" name="product_orgprice" className="product_orgprice" placeholder="Productprice" onChange={handleChange} value={product.product_orgprice}/>
         <input type="file" name="product_img" className="product_img" onChange={fileSubmitHandler}/>
         <div style={{width:`${percentage}%`,height:"2px"}}></div>
        <input type="number" name="product_rating" className="product_rating"  max="5" min="0" onChange={handleChange} value={product.product_image}/> 
         <input type="submit" onClick={submitHandler}/>
         <div></div>
  </form>
    </div>
  )
}

export default EditProduct;