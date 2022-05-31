import React from 'react';

import { useParams } from 'react-router-dom';


function Ceckout({children}) {
   
    
    const {id} = useParams()
    return (
        <div>
            <h2 className='text-center'> checkout {id} </h2>  
             <h2> well come to page</h2>
          
        </div>
    );
}

export default Ceckout;