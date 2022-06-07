import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/people1.png';
import people2 from '../../assets/people2.png';
import people3 from '../../assets/people3.png';
import Review from './Review';
import { useEffect, useState } from 'react';

const Testimonial = () => {
    // const reviews = [
    //     {
    //         _id:1,
    //         name: 'Winson Herry',
    //         review: '',
    //         location: 'california',
    //         img:people1
    //     },
    //     {
    //         _id:2,
    //         name: 'Winson Herry',
    //         review: '',
    //         location: 'california',
    //         img:people2
    //     },
    //     {
    //         _id:3,
    //         name: 'Winson Herry',
    //         review: '',
    //         location: 'california',
    //         img:people3
    //     },
    // ];
    const [testimonial, setTestimonial] = useState([]);
    useEffect ( () => {
        fetch('https://calm-everglades-69368.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setTestimonial(data)); 
    }, [])
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                    <h2 className='text-3xl'>What our Clients say</h2>
                </div>
                <div>
                    <img src={quote} className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    testimonial
                    // .slice(testimonial.length-3, testimonial.length)
                    .map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;