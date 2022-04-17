import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register(props) {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('') 
     const handleName=(e)=>{ 
          setName(e.target.value)
     }; 
     const handleEmail=(e)=>{ 
        setEmail(e.target.value)
   }; 
   const handlePassword=(e)=>{ 
    setPassword(e.target.value)
}; 
   const handleForm=(e)=>{ 
         e.preventDefault() 
         console.log(name,email,password);

   }
    return (
        <div className='container w-50'>
            <form onSubmit={handleForm}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input onBlur={handleName} type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    
                </div> 
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input onBlur={handleEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                 
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input onBlur={handlePassword} type="password" class="form-control" id="exampleInputPassword1" required />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button> 
                 <h4> Allready account <span> <Link to="/login"> Loging </Link> </span> </h4> 
            </form>
        </div>
    );
}

export default Register;