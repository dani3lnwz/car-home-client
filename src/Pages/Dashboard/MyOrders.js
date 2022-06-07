// import React,{ useEffect, useState} from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from './../../firebase.init';
// import { Link, useNavigate } from 'react-router-dom';
// import { signOut } from 'firebase/auth';

// const MyOrders = () => {

//     const [orders, setOrders] = useState([]);
//     console.log(orders);
//     const [user] = useAuthState(auth);
//     const navigate = useNavigate()

//     useEffect( () => {
//         if ( user) {
//             fetch(`https://calm-everglades-69368.herokuapp.com/bookings/${user.email}`,{
//                 method: 'GET',
//                 headers: {
//                     'authorization': `Bearer ${localStorage.getItem('accessToken')}`
//                 }
//             })
//         .then(data => {
//             console.log(data)
//             setOrders(data)
//         });
//         }
//     },[user.email])

//     return (
//         <div>
//             <h2>My Orders: {orders.length}</h2>
//             <div class="overflow-x-auto">
//   <table class="table w-full">

//     <thead>
//       <tr>
//         <th></th>
//         <th>Name</th>
//         <th>Orders</th>
//         <th>Buyer Email</th>
        // <th>Quantity</th>
        // <th>Price</th>
//         <th>PayMent</th>
//       </tr>
//     </thead>
//     <tbody>
//         {
//             orders.map((o, index) => <tr key={o._id}>
//                 <th>{index + 1}</th>
//                 <td>{o.buyerName}</td>
//                 <td>{o.partName}</td>
//                 <td>{o.buyer}</td>
//                 <td>{o.quantity}</td>
//                 <td>{o.price}</td>
//                 <td>
//                     {(o.price && !o.paid) && <Link to={`/dashboard/payment/${o._id}`}><button className="btn btn-xs btn-success">Pay</button></Link>}

//                     {(o.price && o.paid) && <div>
//                         <p><span className="text-success">Paid</span></p>
//                         <p>Transaction id: <span className="text-success">{o.transactionId}</span></p>
//                     </div> }
//                 </td>
                
                
//               </tr>)
//         }
      
//     </tbody>
//   </table>
// </div>
//         </div>
//     );
// };

// export default MyOrders;

import React,{ useEffect, useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const naviagte = useNavigate()

    useEffect( () => {
        if ( user) {
            fetch(`https://calm-everglades-69368.herokuapp.com/booking?buyer=${user.email}`,{
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
        .then(res=> {
            console.log('res', res);
            if(res.status === 401 || res.status === 403){
                signOut(auth);
                localStorage.removeItem('accessToken');
                naviagte('/')
            }
            return res.json()
        })
        .then(data => {

            setOrders(data)
        });
        }
    },[user])

    return (
        <div>
            <h2>My Orders: {orders.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Orders</th>
        <th>Buyer Email</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>PayMent</th>
      </tr>
    </thead>
    <tbody>
        {
            orders.map((o, index) => <tr key={o._id}>
                <th>{index + 1}</th>
                <td>{o.buyerName}</td>
                <td>{o.partName}</td>
                <td>{o.buyer}</td>
                <td>{o.quantity}</td>
                <td>{o.price}</td>
                {/* <td>{o.price}</td> */}
                <td>
                    {(o.price && !o.paid) && <Link to={`/dashboard/payment/${o._id}`}><button className="btn btn-xs btn-success">Pay</button></Link>}

                    {(o.price && o.paid) && <div>
                        <p><span className="text-success">Paid</span></p>
                        <p>Transaction id: <span className="text-success">{o.transactionId}</span></p>
                    </div> }
                </td>
                
                
              </tr>)
        }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;