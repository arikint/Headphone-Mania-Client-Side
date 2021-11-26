import React, { useEffect, useState } from 'react';
import HeadphoneItem from '../HeadphoneItem/HeadphoneItem';

/* --------------------------------------------
 -----Showing headphones component------------
 ---------------------------------------------*/
const Headphones = () => {

/* ------------------------------------------------
 -----declaring variables for various purposes------
 -------------------------------------------------*/
    const [displayHeadphones, setDisplayHeadphones] = useState([]);
    const [control, setConrol] = useState(true);

    useEffect(() => {
        fetch("https://mighty-sierra-93875.herokuapp.com/allHeadphones")
          .then((res) => res.json())
          .then((data) => {setDisplayHeadphones(data)
            setConrol(false)
        });
      }, []);

/* --------------------------------------
 -----slicing items from headphones-----
 ---------------------------------------*/
    const newArray=displayHeadphones.slice(0, 6)
    
/* --------------------------------------------
 -----6 headphones to be rendered on the UI------------
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
                        newArray.map((headphoneItem,index) => <HeadphoneItem
                            key={index}
                            headphoneItem={headphoneItem}
                        >
                        </HeadphoneItem>)
                    }

            </div>}
        </div>
        </>
    );
};

export default Headphones;