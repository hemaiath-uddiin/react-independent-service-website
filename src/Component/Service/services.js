import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'
function Services({data}) {
    const { id,desc,title,img,price} = data  ;
    const navigate = useNavigate()
      const navigateCheckout =(id)=>{ 
         navigate(`/checkout/${id}`)
      }
    return (
        <div>
              <div class="card" >
                <img className='img-fluid ' src={img} alt="..."/>
                    <div class="card-body ">
                      <article className='service-details'> 
                       <p className ="card-text"> {title}</p> 
                       
                       <p className ="card-text "> {desc}</p>  
                       <p> price: {price}  </p>
                        <button onClick={()=>{navigateCheckout(id)}} className='serviceBtn'> More Details</button>
                        
                      </article>
                        
                    </div>
            </div>
        </div>
    );
}

export default Services;