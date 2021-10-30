import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({children , ...rest}) => {
    const {user}=useAuth();
    return (
        <Route
        {...rest}
        render={({location})=>
       user.displayName || user.email? (children):
        <Redirect
        to={{
            pathname: "/login",
            state: { from: location }
          }}
        >

        </Redirect>
    }
        >
            
        </Route>
    );
};

export default PrivateRoute;