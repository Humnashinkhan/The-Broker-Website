import React from 'react'
import './BuyerLogin1.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt , faUnlock  , faUser } from '@fortawesome/free-solid-svg-icons'
const BuyerLogin1 = () => {
  return (
    <div className="BuyerLogin1">
        <div className="box">
            <div className="heading">
                <h1>I want to buy a house</h1>
                <p>By registering you can bid on a home</p>
                <div className="mm">
                <FontAwesomeIcon icon={faAt} className='icon1'/>
                <input type="text" placeholder="E-mail address" className="name"/>
                </div>
                <div className="mm2">
                <FontAwesomeIcon icon={faUnlock}  className='icon1'/>
                <input type="text" placeholder="password" className="name"/>
                </div>
                <div className="loginB">
                <button><FontAwesomeIcon icon={faUser} width='30px'/>LOGIN</button>
              </div>
              <div className="link-2">
          <Link to='/#'>Create account | <Link to='/#'>Forgot your password?</Link> 
         </Link>
         </div>

            </div>


        </div>
        
        </div>
  )
}

export default BuyerLogin1