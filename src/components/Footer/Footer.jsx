import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin  } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
const Footer = () => {
  return (
    <div className="Footer">
        <div className="Sec1">
          <h1>The Free Broker </h1>
          <Link to='/#'className='link'>Plan an informative sales meeting</Link><br/>
          <Link to='/#'className='link'>Online bidding platform</Link><br/>
          <Link to='/#'className='link'>Brokerage commission</Link><br/>
          <Link to='/#'className='link'>Want to sell your own house without real estate agent</Link><br/>
          <Link to='/#'className='link'>Frequently Asked Questions</Link><br/>
          <Link to='/#'className='link'>Compare internet brokers</Link><br/>
          <Link to='/#'className='link'>Blogs</Link><br/>
        </div>
        <div className="Sec2">
        <Link to='/#'className='link'>Story</Link><br/>
        <Link to='/#'className='link'>Sell Smart Without Costs</Link><br/>
        <Link to='/#'className='link'>Real estate agent throughout the Netherlands</Link><br/>
        <Link to='/#'className='link'>state agent?Housing supply</Link><br/>
        <Link to='/#'className='link'>Conditions</Link><br/>
        <Link to='/#'className='link'>Calculate home value</Link><br/>
        </div>
        <div className="Sec3">
          <h1> Contact </h1>
          <p>De Gratis Makelaar<br/>
             Tielweg 30<br/>
             2803 PK GOUDA<br/>
             Kvk 67935818<br/>
             NL857233154B01<br/>
             <FontAwesomeIcon icon={faPhone} width='20px'/>085 - 047 1476<br/>
             <FontAwesomeIcon icon={faEnvelope} width='20px'/>info@degratismakelaar.nl
          </p></div>
          <div className="Sec4">
          <button className='btna'><FontAwesomeIcon icon={faFacebook} width='40px' /></button><br/>
          <button className='btnb'><FontAwesomeIcon icon={faLinkedin} width='40px' /></button><br/>
          <button className='btnc'><FontAwesomeIcon icon={faInstagram} width='40px' /></button>
          </div>
          <div className='Sec5'>
          <img src="assets/image.webp" alt=" " />
          <img src="assets/image2.webp" alt=" " />
          </div>
    </div>
  )
}

export default Footer;