import React from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../../../hooks/useFirebase";

const AddReview = () => {
    /* ------------------------------------------------
 -----Declaring variables for various purpose------------
 -----------------------------------------------------*/
  const { user } = useFirebase();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

/* --------------------------------------------
 -----function for submitting headphone info------------
 ---------------------------------------------*/

  const onSubmit = (data) => {
    data.email = user?.email;
    data.name = user?.displayName;
    fetch("https://mighty-sierra-93875.herokuapp.com/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
    window.alert("Review Added Successfully");
  };

/* ------------------------------------------------
 -----returning UI components to be visible------------
 -------------------------------------------------*/

  return (
    <div>
      <h1 className="mt-5 text-center">Add Review</h1>
      <div className="login-box w-50 m-auto mt-5">
        <div className="event-box border d-flex justify-content-center align-items-center p-5">
          <div className="login-form text-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("headphone")}
                placeholder="Headphone Name"
                className="p-2 m-2 w-100"
              />
              <br />

              <input
                {...register("description")}
                placeholder="Review Description"
                className="p-2 m-2 w-100"
              />
              
              <br />
              <select {...register("rating")} className="p-2 m-2 w-100">
                <option value="0">0 star</option>
                <option value="1">1 star</option>
                <option value="2">2 stars</option>
                <option value="3">3 stars</option>
                <option value="4">4 stars</option>
                <option value="5">5 stars</option>
              </select>
              <br />

              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" value="Add Review" className="btn btn-info w-75 m-3" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
