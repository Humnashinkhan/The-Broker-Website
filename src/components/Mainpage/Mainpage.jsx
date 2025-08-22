import React from 'react'
import './Mainpage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import Mainpage1 from '../Mainpage1/Mainpage1';
import Mainpage2 from '../Mainpage2/Mainpage2';
import Mainpage3 from '../Mainpage3/Mainpage3';
import Mainpage4 from '../Mainpage4/Mainpage4';
import Mainpage5 from '../Mainpage5/Mainpage5';
import Mainpage6 from '../Mainpage6/Mainpage6';
const mainpage = () => {
  return (
    <>
    <div className="bg-container"> 
      <div className="bg-images">
        <div className="text-overlay">
        <h1>SELLING WITHOUT COSTS</h1>
         <p>100% TRANSPARENT</p>
         <p>THE BEST OFFER BY ONLINE BIDDING PLATFORM</p>
         <p>SALES SERVICE INCLUDING FUNDA ADVERTISING, PHOTOS, VALUATION AND PURCHASE AGREEMENT</p>
         <button className='bg-btn'><FontAwesomeIcon icon={faHouse} width='40px'/>THAT IS HOW IT WORKS!</button>

        </div>
         
         </div>
        </div>
         <Mainpage1/>
         <Mainpage2/>
         <Mainpage3/>
         <Mainpage4/>
         <Mainpage5/>
         <Mainpage6/>

</>

  )
}

export default mainpage