import React from 'react';
import Not from '../../images/404.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
/* --------------------------------------------
 -----Showing 404 not found component------------
 ---------------------------------------------*/
const NotFound = () => {

/* -------------------------------------------------
 -----404 not found to be rendered on the UI--------
 --------------------------------------------------*/
    return (
        <div className="container text-center my-5 height">
             <img className="my-5" src={Not} alt="..."/>

            <h1>Not Found</h1>
            <h3>The page you are looking for is not available</h3>
            <NavLink className="btn btn-primary my-5"
                           to={ `home#home`  }
                           
                        > 
                           <FontAwesomeIcon icon={faHome} />  Homepage
                      </NavLink>
        </div>
    );
};

export default NotFound;