import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'
import cl1 from '../images/Homepage-banner_2_1.webp'
import cl2 from '../images/Homepage-Banner_hardik-Denim.webp'
import '../Styles/Slider.css'

function Slider({images}) {
  return (
    <div>
        <Carousel>
        {images.map(item=>{
            console.log(item)
            return <CarouselItem className='carousel-item'>
                <img className='carousel-img' src={item}/>
            </CarouselItem>
        })}
            
         
        
            
        </Carousel>
    </div>
  )
}

export default Slider