import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useStateValue } from '../../Components/StateProvider/StateProvider'
import ProductCard from '../ProductCard';
import '../../Styles/product.css'
import { useParams } from 'react-router-dom';
import { homeCarousel2 } from '../../images/imageProvider';

function Product({props}) {
    const[state,dispatch]=useStateValue();
   const param= useParams()
   console.log(props)
   console.log(param)
    useEffect(() => {

      
        axios.get(`http://localhost:4000/products/${props.gen}/${param.id}`).then((res)=>{
          console.log(res)
          dispatch({
              type:'setProducts',
              payload:res.data.item
          })
        }
  
        )
      
     
    
      return () => {
        
      }
    }, [])
    console.log(state)
  return (
    <div className='product-page'>
    <div>
      <h4 style={{textTransform:"capitalize",color:"grey",textAlign:"left", margin:"10px"}}>{props.gen}/{param.id}</h4>
    </div>
    <div className="product-card-wrap">
        {state.products.map(each=>
            <ProductCard props={each}/>
        )}
        </div>
    </div>
  )
}

export default Product