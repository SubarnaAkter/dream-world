import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle,setIsLoading}=useAuth();
    const [error, setError] = useState('');
    const location=useLocation();
    const history=useHistory();
    const redirects_uri=location.state?.from || '/Home';
    const handleSignInUsingGoogle=()=>{
        signInUsingGoogle()
        .then(() => {
            history.push(redirects_uri);
        })
        .catch(error => {
            setError(error.message);
            
          })
         .finally(() => setIsLoading(false));
        
    }
    return (
        <div>
           <div className="m-5 bg-info py-5 w-50 mx-auto">
           <h3>Please Login</h3>
           <p className="text-white bg-danger">{error}</p>
            <button className="btn-regular" onClick={handleSignInUsingGoogle}>Google Sign in</button>
           </div>
        </div>
    );
};

export default Login;