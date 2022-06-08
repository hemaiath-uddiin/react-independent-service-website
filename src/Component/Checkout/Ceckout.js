import React, { } from 'react';
import "./checkout.css"
import { useParams } from 'react-router-dom';



function Ceckout({children}) {
  // const notify = () => toast("Booking successfully!");
     const {id}= useParams()
 
   
    return (
        <div className='container '>
              <h2>wellcome to checkout page</h2>
              <h2> you have click item {id}  </h2>
            
             
          
        </div>
    );
}

export default Ceckout;