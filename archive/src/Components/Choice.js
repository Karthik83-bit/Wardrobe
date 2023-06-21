import React from 'react'
import '../Styles/choice.css'

function Choice({item}) {
    console.log(item)
  return (
    <div className='choice-wrap'>
    <div className='wood-dtyl decor'></div>
    <div className='white-dtyl decor'></div>
    <div style={{position:"relative"}} className='choice-img-wrap'>
        <img src={item.img}/>
    </div>
    <p style={{WebkitTextFillColor:"transparent", WebkitTextStrokeWidth:"1px",WebkitTextStrokeColor:"white",fontSize:"2em",
    position:"absolute",
    bottom:"10%",
    zIndex:"10"
    }}>{item.choice_name}</p>
    </div>
  )
}

export default Choice