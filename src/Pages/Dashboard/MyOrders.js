import React,{ useEffect, useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const naviagte = useNavigate()

    useEffect( () => {
        if ( user) {
            fetch(`http://localhost:5000/booking?buyer=${user.email}`,{
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