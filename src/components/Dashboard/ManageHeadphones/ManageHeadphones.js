import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemoveFormat } from '@fortawesome/free-solid-svg-icons';


/* --------------------------------------------
 -----Showing Headphones component------------
 ---------------------------------------------*/
const ManageHeadphones = () => {

/* ------------------------------------------------
 -----declaring variables for various purposes------
 -------------------------------------------------*/
    const [displayAllHeadphones, setDisplayAllHeadphones] = useState([]);

  const [control, setControl] = useState(false);
  const [control1, setControl1] = useState(false);
  const [control2, setConrol2] = useState(true);

    useEffect(() => {
        fetch("https://mighty-sierra-93875.herokuapp.com/allHeadphones")
          .then((res) => res.json())
          .then((data) => {setDisplayAllHeadphones(data)
            setConrol2(false)
        });
      });

      /* --------------------------------------------------------
 -----Function for performing delete operation------------
 ---------------------------------------------------------*/
  const handleDelete = (id) => {
    setControl1(true);
  fetch(`https://mighty-sierra-93875.herokuapp.com/deleteHeadphone/${id}`, {
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
 -----Headphones to be rendered on the UI------------
 ---------------------------------------------*/

    return (
        <>
        <div className="container">
        
        
        <div className="container my-5">
               <div className="mb-5 text-center">
                   <h1>Manage All Headphones</h1>
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

                    {
                        displayAllHeadphones.map((headphoneItem,index) => (<div className="col" key={index}>
           
                        <div className="card h-100">
                            <div>
                                <img className="card-img-top" src={headphoneItem.img} alt="" />
                            </div>
                            <div className="card-body">
                                <h4>{headphoneItem.headphone}</h4>
                <p><small>Sensitivity: {headphoneItem.sensitivity} db</small></p>
                <p><small>Frequency: {headphoneItem.frequency} Hz</small></p>
                <p><small>Type: {headphoneItem.type}</small></p>
                <p><small>Vibration Bass: {headphoneItem.vibrationbass}</small></p>
                <p><small>Price: ${headphoneItem.price}</small></p>
                            </div>
                            
                            <button
                              onClick={() => { if (window.confirm('Are you sure you want to delete this headphone? You can always add again.')) handleDelete(headphoneItem._id) }}
                              className="btn bg-warning p-2 m-2"
                            >
                             <FontAwesomeIcon icon={faRemoveFormat} /> Delete Headphone
                            </button>
                        </div>
                        </div>
              
                      ))
                    }

            </div>}
        </div>
        </div>
        </>
    );
};

export default ManageHeadphones;