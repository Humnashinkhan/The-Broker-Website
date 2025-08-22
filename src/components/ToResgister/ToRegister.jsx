import React from 'react'
import './ToRegister.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
const ToRegister = () => {
  return (
    <div className="ToRegister">
       <div className="page-header" >
            <h1>To register</h1>
            <p>Register here without obligation. +<span>2,136</span> customers have already preceded you.</p>
            <img src="assets/logo.png" alt=" "/>
          </div>
          <div className="pannel pannel-default from-horizontal">
            <div className="pannel-heading">
                    <h1>Contact details</h1>
                </div>
                <div className="pannel-body">
                      <font>Name</font>
                      <input type="text" placeholder="First name" className="name"/>
                      <input type="text" placeholder="Infix" className="name"/>
                      <input type="text" placeholder="Last name" className="name"/>
                      <div className="body2">
                      <font>E-mail address</font>
                      <input type="text" placeholder="E-mail address" className="name"/>
                      <font>phone number</font>
                      <input type="text" placeholder="phone number" className="name"/>
                    </div>
                    <div className="pannel-heading1">
                     <h1>House to be sold</h1>
                    </div>
                    <div className="pannel-Body">
                         <font>Postal Code</font>
                      <input type="text" placeholder="Postal Code" className="name"/>
                      <input type="text" placeholder="House number" className="name"/>
                      <input type="text" placeholder="House number additior" className="name"/>
                    <div className="Body1">
                         <font>Address</font>
                      <input type="text" placeholder="Street" className="name"/>
                      <input type="text" placeholder="City" className="name"/>
                      <div className="Body2">
                         <font>Type of property *</font>
                      <input type="text" className="name"/>
                    </div>

                    </div>
                    </div>
                    <div className="Login-portion">
                    <button><FontAwesomeIcon icon={faHouse} width='30px'/>To REGISTER</button>

                    </div>
                </div>
                </div>

          </div>
        
  )
}

export default ToRegister