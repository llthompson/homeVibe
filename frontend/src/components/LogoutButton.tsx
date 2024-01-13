import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useTheme } from '@mui/system';
import { Typography } from "@mui/material";
import Fab from '@mui/material/Fab';

function LogoutButton() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  return (
    <Fab sx={{ display: 'flex' }} variant="extended" color="info" onClick={() => {
      logout({
        logoutParams: {
          returnTo: window.location.origin
        }
      });
    }}><Typography style={{ fontSize: '18px', marginBottom: 0, whiteSpace: 'nowrap' }}>Sign Out</Typography></Fab>
  );
}

export default LogoutButton;