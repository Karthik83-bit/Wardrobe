import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useStateValue } from '../../Components/StateProvider/StateProvider'
import ProductCard from '../ProductCard';
import '../../Styles/product.css'
import { useParams } from 'react-router-dom';
import { homeCarousel2 } from '../../images/imageProvider';

function CategoriesProduct({props}) {
    const[state,dispatch]=useStateValue();
   const param= useParams()
   console.log(props)
   console.log(param)
    useEffect(() => {

      
        axios.get(`http://localhost:4000/categories/${param.type}`).then((res)=>{
          console.log(res)
          dispatch({
              type:'setProducts',
              payload:res.data.items
          })
        }
  
        )
      
     
    
      return () => {
        
      }
    }, [])
    console.log(state)
  return (
    <div className='product-page'>
  
    <div className="product-card-wrap">
        {state.products.map(each=>
            <ProductCard props={each}/>
        )}
        </div>
    </div>
  )
}

export default CategoriesProduct