import React from 'react'
import './Mainpage5.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
const Mainpage5 = () => {
  return (
    <div className="Mainpage5">
        <div className="text-line">
            <h1> START THE FREE SALE OF YOUR PROPERTY NOW </h1>
        </div>
        <div className="request-btn">
        <button className="green-btn"><FontAwesomeIcon icon={faHouse} width='40px'/>REQUEST MORE INFORMATION!</button>
        </div>

    </div>
  )
}

export default Mainpage5