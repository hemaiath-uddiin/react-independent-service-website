import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
function services({data}) {
    const {desc,title,img} = data 
    console.log(data);
    return (
        <div>
              <div class="card" >
                <img className='img-fluid ' src={img} alt="..."/>
                    <div class="card-body ">
                      <article className='service-details'> 
                       <p className ="card-text"> {title}</p> 
                       
                       <p className ="card-text "> {desc}</p> 
                        <button className='serviceBtn'> More Details</button>

                      </article>
                        
                    </div>
            </div>
        </div>
    );
}

export default services;