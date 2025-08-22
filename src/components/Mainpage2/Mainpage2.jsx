import React from 'react'
import './Mainpage2.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'

const Mainpage2 = () => {
  return (
    <div className="Mainpage2">
        <div className="Background-pic">
            <div className="Text-over">
                <h1>Have you heard of our satisfied customers?</h1>
                <p>These are our Reviews #superblijmee</p>
             </div>
             <div className="Reviewers-section flex">
                <div className="Review-slider flex">
                    <div className="card">
                    <img src="assets/pic1.png" alt=" "/>
                     <h3>Lisa jonas</h3>
                    <p>Sold my apartment within a few weeks!!  Short lines, clear agreements,
                     good communication and not to forget a good sales price.</p>
                      <div className="stars">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    </div>
                    <div className="card">
                    <img src="assets/pic2.png" alt=" "/>
                     <h3>John deo</h3>
                    <p>Top system, very satisfied with this real estate agent for the sale of my home
                       We sold our appartment easy and quickly. Thank you for the flexibility.
                    </p>
                      <div className="stars">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                   </div>
                    </div>
                    <div className="card">
                    <img src="assets/pic3.png" alt=" "/>
                     <h3>Rohan </h3>
                    <p>It was a great experience selling my house with De Gratis Makelaar.Everything
                       run fast and smoothly. Good guidance and contact also went smoothly</p>
                      <div className="stars">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                   </div>
                    </div>
                    <div className="card">
                    <img src="assets/pic4.png" alt=" "/>
                     <h3>Julieta </h3>
                    <p>De Gratis Makelaar had various packages for us as a selling party from which we 
                      could choose.We are more than satisfied. Highly recommended!!.</p>
                      <div className="stars">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                   </div>
                    </div>
                    <div className="card">
                    <img src="assets/pic5.png" alt=" "/>
                     <h3>Alexander </h3>
                    <p>Truly fantastic support in the sale of your home! 
                       Delivers what they promise.  Good photos, clarity and
                      very transparent.  Every question was answered. 
                      </p>
                      <div className="stars">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                   </div>
                    </div>



            </div>
             </div>
            
</div>
    </div>
  )  
}

export default Mainpage2