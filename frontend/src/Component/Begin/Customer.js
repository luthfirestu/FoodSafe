import React from 'react'
import "./Customer.css"
import Navigation from '../Navigation'

function Customer() {
  return (
    <div>
        <div className='bg-cust'></div> {/* karena error bg nya ga sesuai */}
        <img className='back' src='https://drive.google.com/uc?view&id=16QBjT1dV-YsRDuDBVAmF9vesF15Tjc9-'></img>
        <img className='customerpict' src='https://drive.google.com/uc?view&id=1v4bJcKHps_lWUNzqk-9QLBll9aXM_JMZ'></img>
        <img className='bg-prof' src='https://drive.google.com/uc?view&id=1FFtchDU-M2YCejnSqY_6RV0L6qXgf4Rb'></img>
        <div className='wrapper'>
            <img className='ic' src='https://drive.google.com/uc?view&id=1q0bzqqLZT-wNXa9px43C2PygrlLiOAXh'></img>
            <img className='ic' src='https://drive.google.com/uc?view&id=1TTCubRrfd7RnX5FMXM4-DGgOWhCweUha'></img>
            <img className='ic' src='https://drive.google.com/uc?view&id=1f5c3hueYsfSNguX-qk8cOV1EbFp-moDq'></img>
            <img className='ic' src='https://drive.google.com/uc?view&id=1Hmbs014dD7k99yTrf5U90Ft1E4VO59GH'></img>
            <img className='ic' src='https://drive.google.com/uc?view&id=1iBkkBqUYjKYWBmtARQj8AHIsB3BISuyF'></img>
        </div>
        <br></br>
        <br></br>
        <Navigation/>
    </div>
  )
}

export default Customer