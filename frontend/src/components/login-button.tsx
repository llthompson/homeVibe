//frontend/src/components/login-button.tsx

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useTheme } from '@mui/system';
import { Typography } from "@mui/material";
import Fab from '@mui/material/Fab';
// import NavigationIcon from '@mui/icons-material/Navigation';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Fab variant="extended" color="info" onClick={() => loginWithRedirect()}>

            <Typography style={{ fontSize: '18px', marginBottom: 0 }}>
                Log In
            </Typography>
        </Fab>
    )
};

export default LoginButton;