import React from 'react'
import Slider from '../Slider'
import { menBrands, menCarouselImages } from '../../images/imageProvider'
import Choice from '../Choice'
import shirtImg from '../../images/budjetbuys/men/shirts.jpg'
import { menCategories } from '../../images/imageProvider'
import '../../Styles/men.css'
import { Link } from 'react-router-dom'
import heroimg from '../../images/menhero.png'


function MensPage({props}) {
  console.log(props)
  return (
    <div className='men-page'>
      Mens
      <div className='slider-wrapper'>
      <Slider images={props.sliderlImages}/>
        
      </div>
      <div className='main-content'>
      <div className='categories'>
      {/* innerwear */}
      <div style={{width:"100%"}}>
      <p style={{ color:"white",fontSize:"3em",
    // position:"absolute",
    display:"block",
    bottom:"10%",
    padding:"1em",
    // fontFamily:"roboto",
    zIndex:"10",
    textAlign:"left",
    }}>EXPLORE CATEGORIES</p>
    </div>
      {props.categories.map(item=>
        <Link to={`/${props.gen}/${item.name}`}><Choice item={item}/></Link>
      )}
    

    

      </div>
      <div className='style-static'>
        <div className='banner'>
        <div className='hero-img-wrap'>
        <div className='hero-cont'>
          <h1>CHOOSE <span>YOUR </span>STYLE</h1>
        </div>
          <div className='hero-decor hero-wood-decor'></div>
          <div className='hero-decor hero-white-decor'></div>
          <img className='hero-img' src={heroimg}/>
        </div>
       
        </div>
      </div>
      <div className='brands'>
      <div style={{width:"100%"}}>
      <p style={{color:"white",fontSize:"3em",
    // position:"absolute",
    display:"block",
    bottom:"10%",
    padding:"0 1em",
    // fontFamily:"roboto",
    zIndex:"10",
    textAlign:"left",
    }}>SHOP BY BRANDS</p>
    </div>
      {menBrands.map(each=>
      <div className='brand-img-wrap'>
        <img className='brand-img' src={each.images}/>
      </div>)}
      </div>
      

      </div>
    </div>
  )
}

export default MensPage
