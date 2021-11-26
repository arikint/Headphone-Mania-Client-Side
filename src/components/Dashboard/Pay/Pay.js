import React from 'react';
import useFirebase from "../../../hooks/useFirebase";
import Not from '../../../images/paypal.png';

/* -----------------------------------------------------------
 -----Showing Pay component------------
 -------------------------------------------------------------*/
const Pay = () => {

/* ------------------------------------------------
 -----declaring variables for various purposes-----
 -------------------------------------------------*/
    const { user } = useFirebase();

/* --------------------------------------------------
 -----Pay component to be rendered on the UI--------
 ---------------------------------------------------*/

    return (
        <div className="container text-center my-5 height">
             <img className="my-5 w-25" src={Not} alt="..."/>

            <h1>Payment system coming soon.</h1><br></br>
            <h3>Dear {user.displayName},</h3>
            <h4>Thanks for considering the payment option. Currently, we are working on the payment system. Hopefully It will be functional soon. Stay tuned.</h4>
    
        </div>
    );
};

export default Pay;