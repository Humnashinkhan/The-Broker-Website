import React from 'react'
import './SellerLogin1.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt , faUnlock  , faUser } from '@fortawesome/free-solid-svg-icons'
const SellerLogin1 = () => {
  return (
    <div className='Container'>
        <div className="header">
        <div className="Text"> 
           <h1>I want to sell a house</h1>
           <div className="first-input">
           <FontAwesomeIcon icon={faAt} className='icon'/>
           <input type="text" placeholder="E-mail address" className="name"/>
           </div>
           <div className="second-input">
           <FontAwesomeIcon icon={faUnlock}  className='icon'/>
           <input type="text" placeholder="password" className="name"/>
          </div>
          <div className="login-button">
          <button><FontAwesomeIcon icon={faUser} width='30px'/>LOGIN</button>
          </div>
          <div className="nav-link">
          <Link to='/#'>Create account | <Link to='/#'>Forgot your password?</Link> 
         </Link>
         </div>
         </div>
        </div>
</div>
        
  )
}

export default SellerLogin1;