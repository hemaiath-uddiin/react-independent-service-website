import React from 'react';
import { useParams } from 'react-router-dom';

function Ceckout(props) {
      const {id} = useParams()
    return (
        <div>
            <h2 className='text-center'> checkout {id} </h2> 
          
        </div>
    );
}

export default Ceckout;