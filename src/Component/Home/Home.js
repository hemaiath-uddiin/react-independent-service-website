import React from 'react';
import Discount from '../Discount/Discount';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import Service from '../Service/Service';

function Home(props) {
    return (
        <div> 
            <Header></Header> 
            <Service></Service>   
             <Discount></Discount>
           
            <Footer></Footer>
        </div>
    );
}

export default Home;