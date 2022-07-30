import React from 'react'
import "./Homepage.css"


function Homepage() {
  return (
    <div className="bg-homepage" >
        <div className='Location'>
            <img className='loc-icon' src='https://drive.google.com/uc?view&id=1VbVYiYBpT3GqvgnqWtIBoDN3jxMcayg2'></img>
            <label>Jakarta, Ind...</label>
        </div>
        <div>
            <form>
                <img className='search-icon' src='https://drive.google.com/uc?view&id=1cgh0vgHx00zoel8eowClzQ3I6UVcgKEM'></img>
                <input className='searchbox' type="text" name="email" placeholder='what are you craving for?'/>
            </form>
        </div>
        <img className='Banner' src='https://drive.google.com/uc?view&id=1p8sZggs9nKvAzFa3gnJ5T8fBLuIOMJDp'></img>
        <h2>Explore by Category</h2>
        <div className='foodcategory'>
            <img src='https://drive.google.com/uc?view&id=113s3a6vcT5cF5XFhmFCoZkrHc2N1wvR_'></img>
            <img src='https://drive.google.com/uc?view&id=1UG4pYUYyqLhw7kwK1AVeirtOsOSfo6n2'></img>
            <img src='https://drive.google.com/uc?view&id=1FqDvdBt9VfoLR3zXBa0E-pSZpC9NAko6'></img>
            <img src='https://drive.google.com/uc?view&id=16SYr599LGBlmt73jTZcu2-qKw83_v09M'></img>
            <div className='labelfood'>
                <p className='product'>Food Product</p>
                <p className='snacks'>Snacks</p>
                <p className='desserts'>Desserts</p>
                <p className='bev'>Beverages</p>
            </div>
        </div>
        <h2>Order Again</h2>
        <div className='orderagain'>
            <img src='https://drive.google.com/uc?view&id=1THasoUGuD34gGpBZ6zftEiygd0pZvkGJ'></img>
            <p className='Namericano'>Namericano</p>
            <p className='Cafe'>Cafe 7 Dream</p>
            <img className='rating' src='https://drive.google.com/uc?view&id=1SFdz3aC6qgZQscZjYPWgp4_ulHbOPEkz'></img>
            <p className='Lastorder'>Ordered 2 days ago</p>
        </div>
        <h2>Recommended</h2>
        <img className='recom' src='https://drive.google.com/uc?view&id=1i1jsuJ48EY88BlIrTaZZ2Y030f5Gbf_7'></img>
        <img className='ratingcom' src='https://drive.google.com/uc?view&id=1SFdz3aC6qgZQscZjYPWgp4_ulHbOPEkz'></img>
        <h4>Thai Beef Salad</h4>
        <p className='eat'>Eat at Kwangya</p>
        <p className='desc'>Thai Beef Salad is a tangy, slightly spicy salad with plenty of flavorful veggies and tender steak</p>
        <div className='discount'></div>
        <p className='price'>80.000 at 23.300</p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </div>
  )
}

export default Homepage