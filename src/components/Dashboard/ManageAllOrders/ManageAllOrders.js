import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemoveFormat } from '@fortawesome/free-solid-svg-icons';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import "./ManageAllOrders.css";
const ManageAllOrders = () => {
/* ------------------------------------------------
 -----declaring variables for various purposes------------
 -------------------------------------------------*/
  const [tour, setTour] = useState([]);
  const [control, setConrol] = useState(false);
  const [control1, setConrol1] = useState(false);
  const [control2, setConrol2] = useState(true);

/* ------------------------------------------------
 -----useEffect for fetching All Orders------------
 -------------------------------------------------*/

  useEffect(() => {
    fetch("https://mighty-sierra-93875.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => {setTour(data)
    setConrol2(false);
    });
  }, [control]);

/* ------------------------------------------------
 -----Function for performing delete operation------------
 -------------------------------------------------*/

  const handleDelete = (id) => {
    setConrol1(true);
    fetch(`https://mighty-sierra-93875.herokuapp.com/deleteOrder/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setConrol(!control);
        } else {
          setConrol(false);
        }
        setConrol1(false);
      });
    console.log(id);
  };

/* --------------------------------------------------------
 -----Function for performing approve operation------------
 ---------------------------------------------------------*/

  const handleShipped = (booking) => {
      setConrol1(true);
const newid=booking._id;
    booking.status="Shipped";
    console.log(booking);
    delete booking._id
    fetch(`https://mighty-sierra-93875.herokuapp.com/shipOrder/${newid}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
          setConrol1(false);
      });
  };
  console.log(tour);

/* ------------------------------------------------
 -----returning UI components to be visible------------
 -------------------------------------------------*/
  
  return (
    <div className="container">
     <div className="container my-5">
            <div className="mb-5 text-center">
                <h1>Manage all Orders here</h1>
            </div>
            {control1&&<div className="wait">
                <h3 className="waitext">Please Wait... </h3>
                <div className="spinner-border text-primary"></div>
            </div>}
            {control2?<div className="d-flex align-items-center justify-content-center">
            <button className="btn btn-success" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Please wait while items are loading from database...
             </button>
      <div className="spinner-border text-success ms-5"></div>
        </div>:<div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">

            {tour?.map((bookingItem, index) => ( <div className="col"key={index}>
          <div className="card h-100">
              <div>
                  <img className="card-img-top" src={bookingItem.img} alt="" />
              </div>
              <div className="card-body">
                  <h4>{bookingItem.destination}</h4>
                  <p><small>Headphone: {bookingItem.headphone}</small></p>
                  <p><small>Frequency: {bookingItem.frequency} Hz</small></p>
                  <p><small>Sensitivity: {bookingItem.sensitivity} db</small></p>
                  <p><small>Booked by: {bookingItem.name}</small></p>
                  <p><small>Booking Email: {bookingItem.bemail}</small></p>
                  <p><small>User Email: {bookingItem.email}</small></p>
                  <h5>Status: {bookingItem.status}</h5>
                  
              </div>
              {(bookingItem.status!=="Shipped")? <button
                onClick={() => handleShipped(bookingItem)}
                className="btn bg-info p-2 m-2"
              >
               <FontAwesomeIcon icon={faAward} /> Approve Shipping
              </button>:<button
               
                className="btn bg-success p-2 m-2"
              >
                Shipped
              </button>}
              <button
                onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) handleDelete(bookingItem._id) }}
                className="btn bg-warning p-2 m-2"
              >
               <FontAwesomeIcon icon={faRemoveFormat} /> Delete
              </button>
          </div>
          </div>
        ))}

            </div>}
        </div>
    </div>
  );
};

export default ManageAllOrders;
