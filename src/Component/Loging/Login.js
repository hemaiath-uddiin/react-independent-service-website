import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className='container w-50'>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button> 
                 <h4> Have no account <span> <Link to="/register"> Create an account  </Link> </span> </h4> 
            </form>
        </div>
    );
};

export default Login;