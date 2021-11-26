import React from 'react';
import useFirebase from "../../hooks/useFirebase";
import Not from '../../images/placed.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

/* -----------------------------------------------------------
 -----Showing Booking placed successfully component------------
 -------------------------------------------------------------*/
const OrderPlaced = () => {

/* ------------------------------------------------
 -----declaring variables for various purposes-----
 -------------------------------------------------*/
    const { user } = useFirebase();

/* --------------------------------------------------
 -----Booking placed to be rendered on the UI--------
 ---------------------------------------------------*/

    return (
        <div className="container text-center my-5 height">
             <img className="my-5" src={Not} alt="..."/>

            <h1>Order Placed Successfully</h1><br></br>
            <h3>Dear {user.displayName},</h3>
            <h4>Thanks for Ordering from Headphone Mania. We will approve your order shortly. Navigate to Explore for more orders</h4>
            <NavLink className="btn btn-primary my-5"
                           to={ `explore#explore`  }
                           
                        > 
                           <FontAwesomeIcon icon={faCalendarCheck} />  Explore
                      </NavLink>
        </div>
    );
};

export default OrderPlaced;