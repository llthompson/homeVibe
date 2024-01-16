import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useTheme } from '@mui/system';
import { Typography, Button } from "@mui/material";

function LogoutButton() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  return (
    <Button sx={{ display: 'flex' }} variant="contained" color="secondary" onClick={() => {
      logout({
        logoutParams: {
          returnTo: window.location.origin
        }
      });
    }}><Typography style={{ fontSize: '18px', marginBottom: 0, whiteSpace: 'nowrap' }}>Sign Out</Typography></Button>
  );
}

export default LogoutButton;