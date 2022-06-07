// import React from 'react';
// import hood from '../../assets/hood.jpeg';
// import door from '../../assets/door.jpeg';
// import spoiler from '../../assets/spoiler.jpeg';
// import hubcap from '../../assets/hubcap.jpeg';
// import Part from './Part';



// const Parts = () => {
//     const parts = [
//         {
//             _id: 1,
//             name: 'HubCap',
//             description: '',
//             img: hubcap
//         },
//         {
//             _id: 2,
//             name: 'Spoiler',
//             description: '',
//             img: spoiler,
//         },
//         {
//             _id: 3,
//             name: 'Hood',
//             description: '',
//             img: hood,
//         },
//     ]
//     return (
//         <div className='my-28'>
//             <div className='text-center '>
//             <h2 className='text-primary text-xl font-bold uppercase'>Our Parts</h2>
//             <h3 className='text-5xl'>Parts We Provide</h3>
//             </div>
//             <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
//                 {
//                     parts.map(part => <Part
//                     key={part._id}
//                     part={part}
//                     ></Part>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default Parts;
import React from 'react';
import { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([]);
    useEffect ( () => {
        fetch('https://calm-everglades-69368.herokuapp.com/part')
        .then(res => res.json())
        .then(data => setParts(data)); 
    }, [])

    return (
        <div>
            <h4 className='text-xl text-secondary text-center'> Available parts</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    parts.slice(parts.length-3, parts.length).map(part => <Part
                    key={part._id}
                    part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;