import React from 'react';
import "./Footer.css"
const Footer = () => {
    const date = new Date();  
    const years = date.getFullYear()
    
    return (
        <div className='container-fluid footer'>
            <h2>  &copy; www.HemaithUddin.com  <span> {years} </span> </h2>
        </div>
    );
};

export default Footer;