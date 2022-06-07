import React, { useEffect, useState } from 'react';

import Services from './Services';
function Service(props) {
    const [service, setservice] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/service")
            .then(res => res.json())
            .then(data => setservice(data))

    }, [])
    return (

        <div className='container'>
            <h2 className='text-center mt-5'> our servicese</h2>
             <div className="row "> 
                <div className="col-lg-12  "> 
                  <div className="row "> 
                  { 
                     service.map((data)=>{ 
                         return( 
                             <div className="col-lg-4 d-block d-lg-flex box "> 
                                 <Services key={data._id} data={data}></Services>
                             
                             </div>
                         )
                     })
                   }
                  
                  </div>
                </div>
             </div>
        </div>
    );
}

export default Service;