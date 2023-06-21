import axios, { Axios } from 'axios';
import React from 'react'
import { useState } from 'react'
import  {Edit,Delete} from '@mui/icons-material'
import { Link } from 'react-router-dom';

function EditPage() {
    const [produvts, setproduvts] = useState([])
    const [update, setUpdate] = useState({
        product_search:"",
        price_start:0,
        price_end:5000,
    })
    const changeHandler=(e)=>{
        e.preventDefault();
        setUpdate({...update,[e.target.name]:e.target.value})
        
    }
    const adminSubmitHandler=()=>{
        console.log(update)
        axios.post("http://localhost:4000/admin",update).then(res=>{
        console.log(res)    
        setproduvts(res.data)})
    }
    const DeleteHandler=(item)=>{
        console.log(item._id)
        setproduvts(()=>produvts.filter((items)=>{
            if(items._id!=item._id){
                return items;
            }
        }))
        axios.delete(`http://localhost:4000/products/${item._id}`,{id:item._id}).then(res=>{
            console.log(res)    
            alert(res.data.msg)})
    }
    
  return (
    <div className="admin-page">
  <input type="text" name="product_search" placeholder="Search by product namr" onChange={changeHandler}/>
<div>
    <h4>Price</h4>
    <label>from:</label>
    <input type="number" name="price_start" max='50000' onChange={changeHandler}/>
    <label>to:</label>
    <input type="number" name="price_end" max="5000" onChange={changeHandler}/>
    <input type="submit" onClick={adminSubmitHandler}/>{
        produvts.map(item=><div>
            {item.product_name}
            {item.product_brand}
            {item.product_price}
           <Link to="/editProduct" state={item} > <Edit/></Link>
            <Delete onClick={()=>DeleteHandler(item)}/>
        </div>)
    }
</div>
    </div>
  )
}

export default EditPage