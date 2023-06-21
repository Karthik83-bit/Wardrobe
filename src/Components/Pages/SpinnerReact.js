import React from 'react'
import { Spinner } from 'react-bootstrap'

function SpinnerReact() {
  return (
    <div className='recent-wrap-slide' style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",minHeight:"40vh"}}><Spinner style={{color:"white"}}/></div>
  )
}

export default SpinnerReact
