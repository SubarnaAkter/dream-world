import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({children , ...rest}) => {
    const {user,isLoading}= useAuth();

    if (isLoading) {
        return <div className=" text-center m-5 p-5 g-2" >
           <Spinner animation="grow" />
           <Spinner animation="grow" />
           <Spinner animation="grow" />
        </div>
    }
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