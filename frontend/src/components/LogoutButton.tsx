// frontend/src/components/LogoutButton.tsx

import { useAuth0 } from '@auth0/auth0-react';
import { Typography, Button } from "@mui/material";


function LogoutButton() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  return (
    <Button className='nav-bar-buttons'
      variant="contained"
      color="secondary"
      onClick={() => {
        logout({
          logoutParams: {
            returnTo: window.location.origin
          }
        });
      }}>
      <Typography className='nav-bar-buttons-text'
        style={{
          fontSize: '18px',
        }}>
        Sign Out
      </Typography>
    </Button>
  );
}

export default LogoutButton;