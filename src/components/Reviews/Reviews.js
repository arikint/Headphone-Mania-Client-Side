import React, { useEffect, useState } from 'react';
import ReviewItem from '../ReviewItem/ReviewItem';

/* --------------------------------------------
 -----Showing Review component------------
 ---------------------------------------------*/
const Reviews = () => {

/* ------------------------------------------------
 -----declaring variables for various purposes------
 -------------------------------------------------*/
    const [displayReviews, setDisplayReviews] = useState([]);
    const [control, setConrol] = useState(true);

    useEffect(() => {
        fetch("https://mighty-sierra-93875.herokuapp.com/allReviews")
          .then((res) => res.json())
          .then((data) => {setDisplayReviews(data)
            setConrol(false)
        });
      }, []);


    
/* ---------------------------------------------
 -----Reviews to be rendered on the UI------------
 ---------------------------------------------*/

    return (
        <>
        <div className="container">
              {control?<div className="d-flex align-items-center justify-content-center">
            <button className="btn btn-success" type="button" disabled>
  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
   Please wait while items are loading from database...
</button>
      <div className="spinner-border text-success"></div>
        </div>:
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">

                    {
                        displayReviews.map((headphoneItem,index) => <ReviewItem
                            key={index}
                            headphoneItem={headphoneItem}
                        >
                        </ReviewItem>)
                    }

            </div>}
        </div>
        </>
    );
};

export default Reviews;