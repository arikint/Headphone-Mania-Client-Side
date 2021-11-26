import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import './Dashboard.css';
import {
    Switch,
    
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddHeadphone from '../AddHeadphone/AddHeadphone';
import Pay from '../Pay/Pay';
import AddReview from '../AddReview/AddReview';
import ManageHeadphones from '../ManageHeadphones/ManageHeadphones';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import MyHeadphones from '../MyHeadphones/MyHeadphones';
import useAuth from './../../../hooks/useAuth';
import AdminRoute from './../../Login/AdminRoute/AdminRoute';
import PrivateRoute from './../../Login/PrivateRoute/PrivateRoute';



function Dashboard() {


    const [toggle, setToggle] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin, logout, user } = useAuth();


    const drawer = (
        <div>
 
            
            {user && !admin && <Box>
            <Link  className="nodec" to={`${url}/addreview`}><Button color="warning">Add Review</Button></Link><br></br>
            <Link  className="nodec" to={`${url}/pay`}><Button color="warning">Pay Now</Button></Link><br></br>
            <Link  className="nodec" to={`${url}/myheadphones`}><Button color="warning">My Headphones</Button></Link><br></br>
            </Box>}
            {admin && <Box>
                <Link className="nodec" to={`${url}/makeadmin`}><Button color="warning">Make Admin</Button></Link><br></br>
                <Link className="nodec" to={`${url}/addheadphone`}><Button color="warning">Add A Headphone</Button></Link><br></br>
                <Link className="nodec" to={`${url}/manageheadphones`}><Button color="warning">Manage Headphones</Button></Link><br></br>
                <Link className="nodec" to={`${url}/manageallorders`}><Button color="warning">Manage All Orders</Button></Link><br></br>
            </Box>}
            {user && <Link  className="nodec" to={`${url}/myheadphones`}><Button onClick={logout} color="warning">Logout</Button></Link>} 

        </div>
    );

   const handleside =()=>{

      setToggle(!toggle);

   }

    

    return (
        <div className="displaygrid">
            <div className="response">
                <div className={`sidemenu`}> {drawer} </div>
            </div>
                <div>
                             <Switch>
                     <PrivateRoute exact path={path}>
                         <DashboardHome></DashboardHome>
                     </PrivateRoute>
                     <AdminRoute path={`${path}/makeadmin`}>
                         <MakeAdmin></MakeAdmin>
                     </AdminRoute>
                     <AdminRoute path={`${path}/addheadphone`}>
                         <AddHeadphone></AddHeadphone>
                     </AdminRoute>
                     <PrivateRoute path={`${path}/pay`}>
                         <Pay></Pay>
                     </PrivateRoute>
                     <PrivateRoute path={`${path}/addreview`}>
                         <AddReview></AddReview>
                     </PrivateRoute>
                     <PrivateRoute path={`${path}/myheadphones`}>
                         <MyHeadphones></MyHeadphones>
                     </PrivateRoute>
                     <AdminRoute path={`${path}/manageheadphones`}>
                         <ManageHeadphones></ManageHeadphones>
                     </AdminRoute>
                     <AdminRoute path={`${path}/manageallorders`}>
                         <ManageAllOrders></ManageAllOrders>
                     </AdminRoute>
                 </Switch>
                </div>
                <button className="btnside" onClick={handleside} >Menu</button>
            </div>
       
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
