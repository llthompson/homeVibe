//frontend/src/App.tsx

import './App.css';
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {

  return (

    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
