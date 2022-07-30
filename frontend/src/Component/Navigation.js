import React from 'react'
import './Navigation.css'
import {BrowserRouter as Router,Link} from 'react-router-dom'

function Navigation() {
  return (
    <div>
      <div className='navbar' id='navigation'>
        <Router>
          <Link to="/Home">
              <img className='home' src='https://drive.google.com/uc?view&id=1yUaH-NpZeuz9CoCIzLx4s5msDLUiWj0A'></img>
          </Link>
          <img className='trans' src='https://drive.google.com/uc?view&id=1XlPBud613KUXcFfroxRnPUkDDU0xCqEX'></img>
          <img className='chat' src='https://drive.google.com/uc?view&id=1Uuf-LESr02kE_FR3HN1Teut2nKhj6bMA'></img>
          <Link to="/Profile">
            <img className='profil' src='https://drive.google.com/uc?view&id=125OJhe67XqgUAFN72R2ivfrVIoAW3407'></img>
          </Link>
        </Router>
      </div>
    </div>
  )
}

export default Navigation