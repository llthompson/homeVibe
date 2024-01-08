//frontend/src/App.tsx

import React, { useEffect, useState } from 'react';
import './App.css';

import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import Navigation from './components/Navigation'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {



  return (
    <ThemeProvider theme={theme}>


      <BrowserRouter>
        <Navigation />
        <Router />
      </BrowserRouter>

    </ThemeProvider>

  );
}

export default App;
