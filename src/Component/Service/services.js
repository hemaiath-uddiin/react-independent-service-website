import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'
function Services({data}) {
    const { _id,desc,title,img,price} = data  ;
    const navigate = useNavigate()
      const navigateCheckout =(_id)=>{ 
         navigate(`/checkout/${_id}`)
      } 
       
    return (
        <div>
              <div className="card cards" >
                <img className='img-fluid ' src={img} alt="..."/>
                    <div class="card-body ">
                      <article className='service-details'> 
                       <p className ="card-text"> {title}</p> 
                       
                       <p className ="card-text "> {desc}</p>  
                       <p> price: {price}  </p>
                      
                        
                      </article> 
                     
                        
                    </div>
            </div> 
            <button onClick={()=>{navigateCheckout(_id)}} className='serviceBtn'> More Details</button>
        </div>
    );
}

export default Services;