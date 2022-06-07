import React from 'react';

const About = () => {
    return (
        <div>

            <div className='text-center'>
                <label class="swap swap-flip text-9xl">

                    <input type="checkbox" />

                    <div class="swap-on">😈</div>
                    <div class="swap-off">😇</div>
                </label>
                <h2 className='mt-5 text-3xl text-red-500 font-bold'>Name: <span className='text-3xl font-bold font-mono text-gray-800'>Tuhuran Newaz Daniel</span></h2>
                <h2 className='mt-2 text-3xl text-red-500 font-bold'>Email: <span className='text-3xl font-bold font-mono text-gray-800'>danielnwz420@gmail.com</span></h2>
                <h2 className='mt-3 text-3xl text-red-500 font-bold'> <p>SSC:<span className='text-3xl font-bold font-mono text-gray-800'>Comilla Zilla School</span></p> <br /><p>HSC:<span className='text-3xl font-bold font-mono text-gray-800'>Comilla Victoria Collage</span></p><br /><p>BBA:<span className='text-3xl font-bold font-mono text-gray-800'>Independent University Of Bangladesh</span></p></h2>
                <h2 className='text-red-500 font-bold'>My best three project live link</h2>
                <p>live Link : <small className='font-bold text-blue-700'>https://my-photography-site-995a1.firebaseapp.com/</small></p>
                <p>live Link : <small className='font-bold text-blue-700'> https://spectacular-sorbet-df83da.netlify.app/</small></p>
                <p>live Link : <small className='font-bold text-blue-700'>https://perfume-store-77842.web.app/</small></p>
            </div>
        </div>
    );
};

export default About;