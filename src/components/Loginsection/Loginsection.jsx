import React from 'react'
import './Loginsection.css'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

const Loginsection = () => {
     const navigate = useNavigate();
     function handleClick (){
        navigate("/SellerLogin")
  }
    function handleClick1 (){
    navigate("/BuyerLogin")
}
  return (
    <div className="Loginsection">
        <div className="left-side">
          <h1>To sell? </h1>
          <p>Sell ​​your home for free,<br/>
            without additional costs! </p> 
          <button onClick={handleClick} className='button1'><FontAwesomeIcon icon={faHouse} width='40px' />
                    SELLER LOGIN</button>
            
            </div>
            <div className="right-side">
                <h1>To buy?  </h1>
                <p> Bid in the online <br/>
                and transparent bidding environment!</p>
            <button onClick={handleClick1} className='button2'><FontAwesomeIcon icon={faHouse} width='40px' />
                   BUYER LOGIN</button>
            </div>
        
        </div>
  )
}

export default Loginsection