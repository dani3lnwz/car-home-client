// import React from 'react';
// import PrimaryButton from '../Shared/PrimaryButton';

// const Part = ({part}) => {
//     return (
//         <div className="card lg:max-w-lg bg-base-100 shadow-xl">
//             <figure className="px-10 pt-10">
//                 <img src={part.img} alt="Shoes" className="rounded-xl" />
//             </figure>
//             <div className="card-body items-center text-center">
//                 <h2 className="card-title">{part.name}</h2>
//                 <p>If a dog chews shoes whose shoes does he choose?</p>
//                 <div className="card-actions">
//                     <PrimaryButton>Buy Now</PrimaryButton>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Part;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({part}) => {
    const {_id, name, img, price, quantity, minimumOrder} = part;

    const navigate = useNavigate();
    const navigateToPurchase = id => {
        navigate(`/purchase/${id}`);
    }

    return (
        <div className='card lg:max-w-lg bg-base-100 shadow-xl'>
            <div className='card-body'>
                <img src={img} alt="" />
                <h2 className='card-title'>{name}</h2>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <p>MinimumOrder: {minimumOrder}</p>

                <button onClick={() => navigateToPurchase(_id)} className="btn btn-primary text-white">Order Now</button>
            </div>
            
        </div>
    );
};

export default Part;