import React from 'react'
import "./Mainpage3.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
const Mainpage3 = () => {
  return (
    <div className="Mainpage3">
        <div className="headline">
            <h1>What do you get from <span>De Gratis Makelaar ? </span></h1>
        </div>
         <div className="responsive-image">
         <img src="./assets/destkop-2.png" alt=" "/>
         </div>
         <div className="information-btn">
        <button className="green-btn1"><FontAwesomeIcon icon={faHouse} width='40px'/>REQUEST MORE INFORMATION!</button>
        </div>
    </div>
  )
}

export default Mainpage3