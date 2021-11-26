import React from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../../../hooks/useFirebase";

const AddHeadphone = () => {
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
    fetch("https://mighty-sierra-93875.herokuapp.com/addHeadphone", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
    window.alert("Headphone Added Successfully");
  };

/* ------------------------------------------------
 -----returning UI components to be visible------------
 -------------------------------------------------*/

  return (
    <div>
      <h1 className="mt-5 text-center">Add Headphone</h1>
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
                {...register("sensitivity")}
                placeholder="Sensitivity"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("description")}
                placeholder="Description"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("price")}
                placeholder="Price"
                className="p-2 m-2 w-100"
              />
              <br />

              <input
                {...register("img", { required: true })}
                placeholder="Image Link"
                className="p-2 m-2 w-100"
              />
              <select {...register("type")} className="p-2 m-2 w-100">
                <option value="wireless">Wireless</option>
                <option value="USB">USB</option>
                <option value="3.5mm">3.5 mm</option>
              </select>
              <br />
              <select {...register("frequency")} className="p-2 m-2 w-100">
                <option value="7-40000">7-40000 Hz</option>
                <option value="20-20000">20-20000 Hz</option>
                <option value="30-16000">30-16000 Hz</option>
              </select>
              
              <br />
              <select {...register("vibrationbass")} className="p-2 m-2 w-100">
                <option value="yes">Vibration Available</option>
                <option value="no">Vibration Unavailable</option>
              </select>
              <br />

              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" value="Add Headphone" className="btn btn-info w-75 m-3" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddHeadphone;
