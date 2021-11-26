import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './ProcessOrder.css';
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useFirebase from "../../hooks/useFirebase";
/* --------------------------------------
 -----Showing process Order------------
 ----------------------------------------*/

const ProcessBooking = () => {

/* --------------------------------------------
 -----variables declared for various purpose---
 ---------------------------------------------*/

    let { _id } = useParams();
    const [headphoneItem, setHeadphoneItem] = useState([]);
    const history = useHistory();
    const [control, setControl] = useState(true);

/* -----------------------------------------------
 -----useEffect for fetching Headphone item------------
 -------------------------------------------------*/
    useEffect(() => {
        fetch(`https://mighty-sierra-93875.herokuapp.com/headphoneitem/${_id}`)
          .then((res) => res.json())
          .then((data) => {setHeadphoneItem(data)
        setControl(false);
        });
      }, [_id]);

      const { user } = useFirebase();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

/* --------------------------------------------------------
 -----Function for submitting order information----------
 ----------------------------------------------------------*/
  const onSubmit = (data) => {
      data.headphone=headphoneItem[0]?.headphone;
      data.sensitivity=headphoneItem[0]?.sensitivity;
      data.img=headphoneItem[0]?.img;
      data.type=headphoneItem[0]?.type;
      data.frequency=headphoneItem[0]?.frequency;
      data.vibrationbass=headphoneItem[0]?.vibrationbass;
      data.price=headphoneItem[0]?.price;
      data.description=headphoneItem[0]?.description;
      data.status="Pending";
      data.email=user.email;
      if(data.name==="") data.name=user.displayName;
      if(data.bemail==="") data.bemail=user.email;
    fetch("https://mighty-sierra-93875.herokuapp.com/addOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
    history.push("/orderplaced");
  };
 

console.log(headphoneItem);
console.log(_id);

/* ---------------------------------------------------
 -----process order to be rendered on the UI--------
 -----------------------------------------------------*/
    return (
        <>
        <div className="container">
         { control?<div className="d-flex align-items-center justify-content-center">
            <button className="btn btn-success" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Please wait while items are loading from database...
             </button>
      <div className="spinner-border text-success ms-5"></div>
        </div>:<div className="row row-cols-lg-2 row-cols-md-1 row-cols-1 g-5 my-5 pb-5">
            <div className="col">
            <img className="detailImg" alt="" src={headphoneItem[0]?.img}/>  
            </div>
            <div className="col">
            <h3> {headphoneItem[0]?.destination}</h3>
            <h5> Headphone : {headphoneItem[0]?.headphone}</h5>
                      <h5>Sensitivity : {headphoneItem[0]?.sensitivity} db</h5>
                     <h5> Frequency: {headphoneItem[0]?.frequency} Hz</h5>
                     <h5> Type: {headphoneItem[0]?.type}</h5>
                    <h3> Price : ${headphoneItem[0]?.price}</h3>
                    <h3> Description :</h3>
                    <h5>{headphoneItem[0]?.description}</h5>
            </div>
          </div>}
      
        </div>

        <div>
      <h1 className="mt-5 text-center">
        Enter Order Information
      </h1>
      <div className="login-box w-50 m-auto mt-5 text-center">
        <div className="event-box border d-flex justify-content-center align-items-center p-5">
          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input defaultValue={user.displayName}
                {...register("name")}
                placeholder="Name"
                className="p-2 m-2 w-100"
              />
              <br />

              <input defaultValue={user.email}
                {...register("bemail")}
                placeholder="Email"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("number", { required: true })}
                placeholder="Number"
                
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("address", { required: true })}
                placeholder="Address"
                className="p-2 m-2 w-100"
              />
              <br />
              
              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" value="Order Now" className="btn btn-info w-75 mt-3" />
            </form>
        
          </div>
        </div>
      </div>
    </div>
        </>
    );
};

export default ProcessBooking;

