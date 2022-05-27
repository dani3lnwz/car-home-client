import React from 'react';

const Review = ({ review }) => {
    const { img, name, rating, description } = review;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p className="text-success">Good day! <br /> We are really greatfull to you because of your opinion let us know about our products and services by giving us review.</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{name}</h4>
                        <h4 className='text-xl'>{description}</h4>
                        <h3>Rating: ${rating}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;