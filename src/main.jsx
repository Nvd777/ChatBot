import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
// import {AppProvider} from ""

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    
  //   <App />
  // </StrictMode>

  <Auth0Provider
    domain="dev-tlvof2a1iv027fmh.us.auth0.com"
    clientId="7DPoT0bqYp94QIbBrLf9E4iXsyTMZKch"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);
