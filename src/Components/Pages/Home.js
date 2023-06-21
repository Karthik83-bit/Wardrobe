import React, {useState, useEffect,lazy,Suspense } from 'react'
import { useStateValue} from '../../Components/StateProvider/StateProvider';
import { homeCarouselImages, homecategories } from '../../images/imageProvider';
import { homeCarousel2 } from '../../images/imageProvider';
import Spinner from 'react-bootstrap/Spinner';
import { Carousel } from 'react-bootstrap';
import Slider from '../Slider';
import axios from 'axios';
// import ProductCard from '../ProductCard';
import '../../Styles/home.css'
import { HomeCategories } from '../../images/imageProvider.js';




function Home() {
  
  new RegExp()
  const Products=lazy(()=>import('../ProductCard'))
  const [recents, setrecents] = useState([]);
  const[loading1,setLoading1]=useState(true)
  const[loading2,setLoading2]=useState(true)
  const [offer, setoffer] = useState([]);
  useEffect(() => {
    console.log("called")
    axios.get("http://localhost:4000/products/recentlyAdded").then(res=>{
    console.log(res.data.item)
    setrecents(res.data.item)
    setLoading1(false)
    })
    axios.get("http://localhost:4000/products/heavyDiscount").then(res=>{
      setoffer(res.data.items)
      setLoading2(false)
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
        {loading1?<div className='recent-wrap-slide' style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",minHeight:"40vh"}}><Spinner style={{color:"white"}}/></div>:  <div className='recent-wrap-slide'>
        {
          recents.map(item=>{
          
           return <Suspense fallback={<div>loading....</div>}>
           <Products props={item}/>
           </Suspense>
          })
        }
</div>
        
        }
      
      </div>
      <div className='slider2'>
      <Slider images={homeCarousel2}/>
      </div>
      <div className='recent-product-wrap'>
        <h3>HEAVY DISCOUNT</h3>
        {loading2?<div className='recent-wrap-slide' style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",minHeight:"40vh"}}><Spinner style={{color:"white"}}/></div>:  <div className='recent-wrap-slide'>
        {
          offer.map(item=>{
          
           return <Suspense fallback={<div style={{color:"white"}}>loading....</div>}>
           <Products props={item}/>
           </Suspense>
          })
        }
</div>
        
        }
       
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
