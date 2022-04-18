import React,{useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate,  } from 'react-router-dom';
import auth from '../../fire.base.init'; 
import "./Loging.css" 



const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('') 
      // sing in with email and passord .................
    const [
        signInWithEmailAndPassword,
        user,loading,
        error,
        
      ] = useSignInWithEmailAndPassword(auth);
      
      
      const handleEmail =(e)=>{ 
             setEmail(e.target.value)
       } 
       const handlePassword =(e)=>{ 
        setPassword(e.target.value)
  }     
   
    // login form handle................
    const loginFormHandle=(e)=>{ 
           e.preventDefault();
           console.log(email,password);  
           signInWithEmailAndPassword(email,password)
           
          
          
    }  
    const navigate = useNavigate()
    if(user){ 
        navigate("/")
    }  
    
     // sign in with google.............................
    const [signInWithGoogle] = useSignInWithGoogle(auth);
   
    return (
        <div className='container w-50'>
            <form onSubmit={loginFormHandle} >
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input onBlur={handleEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input onBlur={handlePassword} type="password" class="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button> 
                 <h4> Have no account <span> <Link to="/register"> Create an account  </Link> </span> </h4>  
                   <h2 className='text-center'> or</h2> 
                    <button onClick={()=>{signInWithGoogle()}} className=' btn btn-primary m-auto btns'>sign In Google </button>
            </form>
        </div>
    );
};

export default Login;