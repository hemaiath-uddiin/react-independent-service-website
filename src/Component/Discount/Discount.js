import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import "./Discount.css"

const Discount = () => {
    const [service, setservice] = useState([])
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setservice(data))
    }, [])
    return (
        <div className='container discount'>
            <h1> Discount </h1>
            <div className="row">
                {
                    service.map((services) => {
                        const {title,desc,img,price} = services
                        return (
                            <div className="col-lg-4 d-block d-lg-flex">
                                <div class="card ">
                                    <img src= {img} class="card-img-top" alt="..."/>
                                        <div class="card-body">
                                            <h5 class="card-title"> {title} </h5>
                                            <p class="card-text"> {desc} </p>
                                            <p class="card-text"> {price} </p>
                                            
                                        </div> 
                                        <Link to="/" class="booking"> Booking Now</Link>
                                </div>

                            </div>
                        )
                    })

                }


            </div>

        </div>
    );
};

export default Discount;