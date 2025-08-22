import React from 'react'
import './Topbar.css'
 import{ useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faUser, faHouse} from '@fortawesome/free-solid-svg-icons'
const Topbar = () => {
    const navigate = useNavigate();
    function handleClick (){
        navigate("/Login")
    }
    function handleClick2 (){
        navigate("/Register")
    }
  return (
    <>
        <nav className='navbar-one flex'>
        <div className="left flex">
        <div className="call">
          <span><FontAwesomeIcon icon={faPhone} width='20px'/>085 - 047 1476</span>
        </div>
         <div className="email">
         <span><FontAwesomeIcon icon={faEnvelope} width='30px'/>info@degratismakelaar.nl</span>
        </div>
        </div>
        <div className="center">
        <div className="logo-container">
          <img src="assets/image.webp" alt=" "/>
          <img src="assets/image2.webp" alt=" "/>
        </div>
      </div>  
      <div className="right flex">
        <div className="Login">
        <button onClick={handleClick} className='nav-button1'><FontAwesomeIcon icon={faUser} width='30px'/>LOGIN</button>
        </div>
        <div className="register">
        <button onClick={handleClick2} className='nav-button2'><FontAwesomeIcon icon={faHouse} width='40px'/>REGISTER HOUSE</button>
      </div>
      </div>
      </nav>
      <nav className="navbar-second flex">
        <div className="logo">
            <Link to='/'>
            <img src="assets/image3.webp" alt=" "/>
            </Link>
        </div>
        <div className='right flex'>
            <a href="#Blogs"> Blogs </a> 
            <a href="#Offer"> Offer </a>
            <a href="#About"> About-Us </a>
            <a href="#Sell">To sell</a>
            <a href="#Buy">To buy </a>
            <a href="#Contact"> Contact </a>
            </div>
    </nav>
    </>
    

      
    )
}

export default Topbar