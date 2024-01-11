//frontend/src/App.tsx

import './App.css';
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import Navigation from './components/Navigation'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { PageLoader } from './components/Page-Loader';
import { useAuth0 } from "@auth0/auth0-react";
import { Auth0ProviderWithNavigate } from './Auth0NavProvider';

function App() {

  // const { isLoading } = useAuth0();

  // if (isLoading) {
  //   return (
  //     <div className="page-layout">
  //       <PageLoader />
  //     </div>
  //   );
  // }

  return (

    <ThemeProvider theme={theme}>
      {/* <Auth0ProviderWithNavigate> */}

      <BrowserRouter>
        {/* <Navigation /> */}
        <Router />
      </BrowserRouter>
      {/* </Auth0ProviderWithNavigate> */}
    </ThemeProvider>

  );
}

export default App;
