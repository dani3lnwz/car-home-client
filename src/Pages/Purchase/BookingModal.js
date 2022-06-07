// import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from './../../firebase.init';
// import { useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const BookingModal = (props) => {
//     const [user] = useAuthState(auth);
//     const {name} = props.part;
//     const {quantity, price, setConfirmOrder} = props

//     const { id } = useParams();
//     // const [part, setPart] = useState({});
//     // const {_id, name, price, placeOrder} = part;

//     // useEffect (() => {
//     //     const url = `https://calm-everglades-69368.herokuapp.com/part/${id}`;
//     //     fetch(url)
//     //     .then(res => res.json())
//     //     .then(data => setPart(data))
//     // }, [id])



//     const handleBooking = event => {
//         event.preventDefault();

//         const booking = {
//             partId: id,
//             partName: name,
//             // partPrice: price,
//             price: price,
//             quantity: quantity,
//             // partOrder: placeOrder,
//             buyer: user.email,
//             buyerName: user.displayName
//         }
//         console.log(booking)

//         fetch('https://calm-everglades-69368.herokuapp.com/booking', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(booking)
//         })
//         .then(res => res.json())
//         .then(data => {
//             if(data.success) {
//                 toast("Order didn't Placed")
//             }
//             else {
//                 toast(`${name}, order placed`)
//             }
//             setConfirmOrder(null);
//         })
//     }
//     return (
//         <div>
            
//             <input type="checkbox" id="booking-modal" className="modal-toggle" />
//             <div className="modal modal-bottom sm:modal-middle">
//                 <div className="modal-box">
//                     <h3 className="font-bold text-lg text-center">Confirm Order</h3>
//                     <form onSubmit={handleBooking} className="mt-5 grid grid-cols-1 gap-3 justify-items-center">
//                         <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w" />
//                         <input type="email" name="email" disabled value={user.email || ''} className="input input-bordered w-full max-w" />
//                         <input type="text" name="phone" placeholder="Phone No." className="input input-bordered w-full max-w" />
//                         <input type="submit" value="Confirm Order" className="btn btn-accent w-full" />
//                     </form>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default BookingModal;

import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const BookingModal = ({setConfirmOrder}) => {
    const [user, loading, error] = useAuthState(auth);

    const { id } = useParams();
    const [part, setPart] = useState({});
    const {_id, name, price, placeOrder} = part;

    useEffect (() => {
        const url = `https://calm-everglades-69368.herokuapp.com/part/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPart(data))
    }, [id])

    const handleBooking = event => {
        event.preventDefault();

        const booking = {
            partId: _id,
            partName: name,
            // partPrice: price,
            price,
            partOrder: placeOrder,
            buyer: user.email,
            buyerName: user.displayName
        }

        fetch('https://calm-everglades-69368.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success) {
                toast("Order didn't Placed")
            }
            else {
                toast(`${name}, order placed`)
            }
            setConfirmOrder(null);
        })
    }
    return (
        <div>
            
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">Confirm Order</h3>
                    <form onSubmit={handleBooking} className="mt-5 grid grid-cols-1 gap-3 justify-items-center">
                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w" />
                        <input type="email" name="email" disabled value={user.email || ''} className="input input-bordered w-full max-w" />
                        <input type="text" name="phone" placeholder="Phone No." className="input input-bordered w-full max-w" />
                        <input type="submit" value="Confirm Order" className="btn btn-accent w-full" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default BookingModal;