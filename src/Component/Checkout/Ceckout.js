import React, { useEffect, useState } from 'react';
import "./checkout.css"
import { useParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function Ceckout({children}) {
  const notify = () => toast("Booking successfully!");
    const {id}= useParams()
      const [signleService,setSingleService] = useState({}) ;
       const url = `http://localhost:5000/service/${id}`
      useEffect(()=>{ 
         fetch(url) 
         .then((res)=>res.json()) 
         .then((data)=>setSingleService(data))
      },[]) 
   
    return (
        <div className='container check_out'>
             <div className="row"> 
            
                <div className="col-lg-6"> 
                <img className='img-fluid w-100' src={signleService.img} alt="img" />
                  
                </div> 
                <div className="col-lg-6 description "> 
                <article className='article'> 
                   
                   <h5> {signleService.title} </h5>  
                   <h5> {signleService.desc}   </h5>
                   <p className='p'> price: {signleService.price}</p> 
                  

                  </article> 
                  <button onClick={notify} className='btn btn-primary'>Booking Now</button> 
                  <ToastContainer />
                
                </div>
             
             </div>
          
        </div>
    );
}

export default Ceckout;