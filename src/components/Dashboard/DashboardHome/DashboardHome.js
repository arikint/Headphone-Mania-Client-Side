import * as React from 'react';
import useFirebase from "../../../hooks/useFirebase";
import Not from '../../../images/dash.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';



const DashboardHome = () => {
    const { user } = useFirebase();
    return (
        <div className="container text-center my-5 height">
             <img className="my-5" src={Not} alt="..."/>

            <h1>Welcome {user.displayName} to the Dashboard</h1><br></br>
            <h3>Click the links for performing different operations</h3>
            <NavLink className="btn btn-primary my-5"
                           to={ `/home#home`  }
                           
                        > 
                           <FontAwesomeIcon icon={faHome} />  Homepage
                      </NavLink>
        </div>
    );
};

export default DashboardHome;