import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle}=useAuth();
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
        // .finally(() => setIsLoading(false));
        
    }
    return (
        <div>
            <h3>Please Login</h3>
            <button onClick={handleSignInUsingGoogle}>Sign in</button>
        </div>
    );
};

export default Login;