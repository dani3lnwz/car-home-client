import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from '../Shared/Footer';
import BookingModal from './BookingModal';

const Purchase = () => {
    const { id } = useParams();
    const [part, setPart] = useState({});
    const { name, img, price, availableQuantity, minimumOrder, placeOrder, description } = part;

    const [confirmOrder, setConfirmOrder] = useState(null);

    useEffect(() => {
        const url = `http://localhost:5000/part/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [id])

    const handleIncreaseQuantity = () => {
        let { name, _id, description, price, img, availableQuantity, placeOrder, minimumOrder } = part;

        if (placeOrder !== 0) {
            placeOrder= placeOrder + 1;
            const purchase = { name, _id, description, price, img,  availableQuantity, placeOrder, minimumOrder };

            const url = `http://localhost:5000/part/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(purchase)
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('success', data);
                })

            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setPart(data)
                    setPart(purchase);

                })
        }
    }

    const handleDecreaseQuantity = () => {
        let { name, _id, description, price, img, availableQuantity, placeOrder, minimumOrder } = part;

        if (placeOrder !== 0) {
            placeOrder = placeOrder - 1;
            const purchase = { name, _id, description, price, img, availableQuantity, placeOrder, minimumOrder };

            const url = `http://localhost:5000/part/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(purchase)
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('success', data);
                })

            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setPart(data)
                    setPart(purchase);

                })
        }
    }



    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl max-w-7xl mx-auto px-12 my-20">
                <figure className="px-10 pt-10">

                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p><b>Quantity: {availableQuantity}</b></p>
                    <p><b>Minimum Order: {minimumOrder}</b></p>
                    <p><b>Place Order: {placeOrder}</b></p>
                    <p><b>Price: {price}</b></p>
                    <div className="card-actions">

                        <div className="btn-group mt-4">
                            <button onClick={handleDecreaseQuantity} className="btn"><b>-</b></button>
                            <p className='mt-3 mx-2'><b>Quantity</b></p>
                            <button onClick={handleIncreaseQuantity}  className="btn"><b>+</b></button>
                        </div>

                    </div>
                </div>

                <label onClick={(setConfirmOrder)} for="booking-modal" className="btn mx-40 mb-3">Purchase</label>
            </div>

            <Footer></Footer>
            {confirmOrder && <BookingModal
            setConfirmOrder={setConfirmOrder}
            ></BookingModal>}
        </div>

    );
};

export default Purchase;


// import React from 'react';
// import { useParams } from 'react-router-dom';
// import Purchase from './Purchase';

// const Purchase = () => {
//     const { partId } = useParams();
//     return (
//         <div>
//             <h2>Your : {partId}</h2>
//         </div>
//     );
// };

// export default Purchase;

// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useState } from 'react';
// import { useEffect } from 'react';




// const Purchase = () => {
//     const [part, setPart] = useState({});
//     const { _id } = part;

//     useEffect(() => {
//         const url = `http://localhost:5000/part/${partId}`;
//         fetch(url)
//             .then(res => res.json())
//             .then(data => console.log(data))
            
//     }, [])
//     const { partId } = useParams();
//     return (
//         <div>
//             <h2>Your : {_id}</h2>
//         </div>
//     );
// };

// export default Purchase;