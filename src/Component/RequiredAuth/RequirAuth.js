import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../fire.base.init';

const RequirAuth = ({children}) => {
    const [user] = useAuthState(auth);
    const location = useLocation(); 
    if(!user){ 
       return <Navigate to="/login" state={{from: location}} replace/>
    }
    return children;
};

export default RequirAuth;