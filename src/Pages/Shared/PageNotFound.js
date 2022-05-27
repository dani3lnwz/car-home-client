import React from 'react';
import error from '../../assets/erro.jpg';

const PageNotFound = () => {
    return (
    
             <div style={{
        background: `url(${error})`,
        backgroundSize: 'cover'
    }} className="hero min-h-screen"></div>
      
    );
};

export default PageNotFound;