import React,{ useEffect, useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth)

    useEffect( () => {
        if ( user) {
            fetch(`http://localhost:5000/booking?buyer=${user.email}`)
        .then(res=> res.json())
        .then(data => setOrders(data));
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
      </tr>
    </thead>
    <tbody>
        {
            orders.map((o, index) => <tr>
                <th>{index + 1}</th>
                <td>{o.buyerName}</td>
                <td>{o.partName}</td>
                <td>{o.buyer}</td>
              </tr>)
        }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;