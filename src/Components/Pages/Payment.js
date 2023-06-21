import React from 'react'
import "../../Styles/Pyament.css"
import CheckIcon from '@mui/icons-material/Check';

function Payment() {
  return (
    <div className="PaymentPage" >
      <div className='model'>
        <CheckIcon style={{color:"green",fontSize:"300px"}}/>
        
      </div>
      <h1 style={{color:'green'}}>Order Successfull</h1>
    </div>
  )
}

export default Payment
