import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';

function Home(props) {
    return (
        <div>
            <Header></Header> 
            <Service></Service> 
            <Footer></Footer>
        </div>
    );
}

export default Home;