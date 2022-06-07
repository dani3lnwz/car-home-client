import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0SV2HTfSlq5n9tP11C0wfG81cDemYx1FaTnRibhaEnVwgxwY18eMI6FLDwfq1v6PSUm5IxBMVbFFDsJrjhgPPp00Fo1Kutrz');


const Payment = () => {
    const { id } = useParams();
    const url = `https://calm-everglades-69368.herokuapp.com/booking/${id}`;

    const { data: o, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello {o.buyerName}</p>
                    <h2 class="card-title">Pay for {o.partName}</h2>
                    <p>Please Pay: ${o.price}</p>

                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm o={o}/>
                    </Elements>

                </div>
            </div>
        </div>

    );
};

export default Payment;