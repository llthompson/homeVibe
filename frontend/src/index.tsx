import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Auth0Provider } from '@auth0/auth0-react';
import { Auth0ProviderWithNavigate } from "./Auth0NavProvider";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Auth0ProviderWithNavigate> */}
      <App />
    {/* </Auth0ProviderWithNavigate> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
