import React, { useState,useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemoveFormat } from '@fortawesome/free-solid-svg-icons';
import useFirebase from "../../../hooks/useFirebase";

const MyHeadphones = () => {

/* ------------------------------------------------
 -----declaring variables for various purposes-----
 -------------------------------------------------*/
  const { user } = useFirebase();
  const [headphones, setHeadphones] = useState([]);
  const [control, setControl] = useState(false);
  const [control1, setControl1] = useState(false);
  const [control2, setConrol2] = useState(true);

 /* -----------------------------------------------
 -----useEffect for fetching user Orders----------
 -------------------------------------------------*/
  useEffect(() => {
    fetch(`https://mighty-sierra-93875.herokuapp.com/myOrders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {setHeadphones(data)
        setConrol2(false);
    });
  });


/* --------------------------------------------------------
 -----Function for performing delete operation------------
 ---------------------------------------------------------*/
  const handleDelete = (id) => {
      setControl1(true);
    fetch(`https://mighty-sierra-93875.herokuapp.com/deleteOrder/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setControl(!control);
          setControl1(false);
        } else {
          setControl(false);
        }
      });
    console.log(id);
  };


  /* --------------------------------------------
 -----User Headphones to be rendered on the UI--------
 ---------------------------------------------*/
  return (
    <div className="container">
        
        
     <div className="container my-5">
            <div className="mb-5 text-center">
                <h1>Manage My Bookings</h1>
            </div>
            {control1&&<div className="wait">
                <h3 className="waitext">Please Wait... </h3>
                <div className="spinner-border text-primary"></div>
            </div>}
           { control2?<div className="d-flex align-items-center justify-content-center">
            <button className="btn btn-success" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Please wait while items are loading from database...
             </button>
      <div className="spinner-border text-success ms-5"></div>
        </div>:<div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">

            {headphones?.map((orderItem, index) => (<div className="col" key={index}>
           
          <div className="card h-100">
              <div>
                  <img className="card-img-top" src={orderItem.img} alt="" />
              </div>
              <div className="card-body">
                  <h4>{orderItem.destination}</h4>
                  <p><small>Headphone: {orderItem.headphone}</small></p>
                  <p><small>Sensitivity: {orderItem.sensitivity} db</small></p>
                  <p><small>Frequency: {orderItem.frequency} Hz</small></p>
                  <h5>Status: {orderItem.status}</h5>
              </div>
              
              <button
                onClick={() => { if (window.confirm('Are you sure you want to cancel this order? You can always order again.')) handleDelete(orderItem._id) }}
                className="btn bg-warning p-2 m-2"
              >
               <FontAwesomeIcon icon={faRemoveFormat} /> Cancel Order
              </button>
          </div>
          </div>

        ))}

            </div>}
        </div>
    </div>
  );
};

export default MyHeadphones;