import React, { useEffect, useState } from 'react';

import Services from './Services';
function Service(props) {
    const [service, setservice] = useState([]);
    useEffect(() => {
        fetch("data.json")
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
                             <div className="col-lg-4 box "> 
                                 <Services key={data.id} data={data}></Services>
                             
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