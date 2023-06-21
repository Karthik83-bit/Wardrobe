import React, {useState, useEffect } from 'react'
import { useStateValue} from '../../Components/StateProvider/StateProvider';
import { homeCarouselImages, homecategories } from '../../images/imageProvider';
import { homeCarousel2 } from '../../images/imageProvider';
import { Carousel } from 'react-bootstrap';
import Slider from '../Slider';
import axios from 'axios';
import ProductCard from '../ProductCard';
import '../../Styles/home.css'
import { HomeCategories } from '../../images/imageProvider.js';




function Home() {
  const [recents, setrecents] = useState([]);
  const [offer, setoffer] = useState([]);
  useEffect(() => {
    console.log("called")
    axios.get("http://localhost:4000/products/recentlyAdded").then(res=>{
    console.log(res.data.item)
    setrecents(res.data.item)
    })
    axios.get("http://localhost:4000/products/heavyDiscount").then(res=>{
      setoffer(res.data.items)
    })
  }, [])
  const[state,dispatch]=useStateValue();
  
  console.log(state)
  

  return (
    <div className='homepage'>
      Home
      {state.user?`welcome ${state.user.username} `:"user absent"}
      <Slider images={homeCarouselImages}/>
      <div className='recent-product-wrap'>
        <h3> NEWLY ARRIVED</h3>
        <div className='recent-wrap-slide'>
        {
          recents.map(item=>{
          
           return <ProductCard props={item}/>
          })
        }
</div>
      </div>
      <div className='slider2'>
      <Slider images={homeCarousel2}/>
      </div>
      <div className='recent-product-wrap'>
        <h3>HEAVY DISCOUNT</h3>
        <div className='recent-wrap-slide'>
        {
          offer.map(item=>{
          
           return <ProductCard props={item}/>
          })
        }
</div>
      </div>
      <div className='category-wrap'>
          <h3>SHOP BY CATEGORY</h3>
          <div className='home-cat-image-container'>
          
         {homecategories.map(item=>{
          return <a href={`categories/${item.type}`}>
          <div className="home-category-links">
          {/* <div className='cat-decor'></div> */}
          <h3>{item.name}</h3>
          <img src={item.img}/>
          
          </div>
          </a>
         })}
         </div>
      </div>
    </div>
  )
}

export default Home
