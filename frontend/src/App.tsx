//frontend/src/App.tsx

import './App.css';
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import Navigation from './components/Navigation'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { Auth0Provider } from '@auth0/auth0-react';

function App() {

  return (
    <Auth0Provider
        domain="{yourDomain}"
        clientId="{yourClientId}"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
    >
    
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navigation />
        <Router />
      </BrowserRouter>
    </ThemeProvider>

    </Auth0Provider>
  );
}

export default App;
