import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const LoginPage = () => {
  const { loginWithRedirect, logout, isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  return (
    <div>
      <header className="App-header">
        <h1>Auth0</h1>
        <button onClick={() => loginWithRedirect()}>Login</button>
        <button onClick={() => logout()}>Logout</button>
        {isAuthenticated && (
          <div>
            <h1>Logged in </h1>
            
            {/* <h2>Profile</h2> */}
            {/* { JSON.stringify(user, null, 2)} */}
             
        <h3>Goto dashboard</h3>
        <Navigate to="/Addinfo" replace={true}>Dashboard</Navigate>
          </div>
          
        )}
     
    </header>
    </div>
  );
};

export default LoginPage;
