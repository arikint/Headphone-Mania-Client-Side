import React from 'react';
import Rating from 'react-rating';
/* --------------------------------------------
 -----Showing Toprated component------------
 ---------------------------------------------*/
const TopRatedItem = (props) => {
/* --------------------------------------------
 -----destructuring from objects in props------------
 ---------------------------------------------*/
 const { name, img, rating } = props.topRatedItem;

    return (
        <div className="col">
        <div className="card text-center">
            <div>
                <img className="card-img-top w-75" src={img} alt="" />
            </div>
            <div className="card-body">
                <h4>{name}</h4>
               
              
               
                
                <Rating
                    initialRating={rating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
                
            </div>
        </div>
        </div>
    );
};

export default TopRatedItem;