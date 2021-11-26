import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHeadphones } from '@fortawesome/free-solid-svg-icons';
import './HeadphoneItem.css';
import { NavLink } from 'react-router-dom';

/* --------------------------------------------
 -----Showing Headphoneitem component------------
 ---------------------------------------------*/
const HeadphoneItem = (props) => {
/* --------------------------------------------
 -----destructuring from objects in props------------
 ---------------------------------------------*/
    const { headphone,sensitivity, img, frequency, price, type, vibrationbass } = props.headphoneItem;
    return (
        <div className="col">
        <div className="card h-100">
            <div>
                <img className="card-img-top" src={img} alt="" />
            </div>
            <div className="card-body">
            <h4>{headphone}</h4>
                <p><small>Sensitivity: {sensitivity} db</small></p>
                <p><small>Frequency: {frequency} Hz</small></p>
                <p><small>Type: {type}</small></p>
                <p><small>Vibration Bass: {vibrationbass}</small></p>
                <p><small>Tour Price: ${price}</small></p>
               
              <div className="btnPosition">
                <NavLink className="btn btn-primary"
                           to={ `/exploreitem/${props.headphoneItem?._id}`  }
                           
                        > 
                           <FontAwesomeIcon icon={faHeadphones} />  Purchase Now
                      </NavLink>
              </div>
                
            </div>
        </div>
        </div>
    );
};

export default HeadphoneItem;