import React from 'react';


import Rating from 'react-rating';

/* --------------------------------------------
 -----Showing ReviewItem component------------
 ---------------------------------------------*/
const ReviewItem = (props) => {
/* --------------------------------------------
 -----destructuring from objects in props------------
 ---------------------------------------------*/
    const { headphone,description, name, email, rating } = props.headphoneItem;
    return (
        <div className="col">
        <div className="card h-100">
        
            <div className="card-body text-center">
                <h4>{headphone}</h4>
                <p>Reviewer: {name}</p>
                <p className="mb-3">Reviewer Email: {email}</p>
                <Rating
                    initialRating={rating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
                <h5 className="mt-3">{description}</h5>
                     
            </div>
        </div>
        </div>
    );
};

export default ReviewItem;