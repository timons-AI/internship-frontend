import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
    domain="dev-vuo71mvzxkidycrm.us.auth0.com"
    clientId="5YDAwVytnMtuTWdEgYM2GgE6UoHfa0Ei"
    authorizationParams={{
      redirect_uri: window.location.origin,
    audience:"internship-api", 
    scope: "read:current_user update:current_user_metadata"
  }}
  >
    <Router>
    <App />
    </Router>
  </Auth0Provider>,
)
