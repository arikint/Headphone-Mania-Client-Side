import React, { useEffect, useState } from 'react';
import ExploreItem from '../ExploreItem/ExploreItem';

/* --------------------------------------------
 -----Showing Explore component------------
 ---------------------------------------------*/
const Explore = () => {

/* ------------------------------------------------
 -----declaring variables for various purposes------
 -------------------------------------------------*/
    const [displayAllTours, setDisplayAllTours] = useState([]);
    const [control, setConrol] = useState(true);

    useEffect(() => {
        fetch("https://mighty-sierra-93875.herokuapp.com/allHeadphones")
          .then((res) => res.json())
          .then((data) => {setDisplayAllTours(data)
            setConrol(false)
        });
      }, []);
    
/* --------------------------------------------
 -----Explore to be rendered on the UI------------
 ---------------------------------------------*/

    return (
        <>
        <div className="container">
        <div className="m-5 text-center">
                   <h1>Explore All Headphones</h1>
               </div>
              {control?<div className="d-flex align-items-center justify-content-center">
            <button className="btn btn-success" type="button" disabled>
  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
   Please wait while items are loading from database...
</button>
      <div className="spinner-border text-success"></div>
        </div>:
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">

                    {
                        displayAllTours.map((headphoneItem,index) => <ExploreItem
                            key={index}
                            headphoneItem={headphoneItem}
                        >
                        </ExploreItem>)
                    }

            </div>}
        </div>
        </>
    );
};

export default Explore;