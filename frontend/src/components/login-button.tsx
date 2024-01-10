//frontend/src/components/login-button.tsx

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useTheme } from '@mui/system';
import { Typography } from "@mui/material";
import Fab from '@mui/material/Fab';
import { wrap } from "module";
// import NavigationIcon from '@mui/icons-material/Navigation';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Fab sx={{ display: 'flex' }} variant="extended" color="info" onClick={() => loginWithRedirect()}>

            <Typography style={{ fontSize: '18px', marginBottom: 0, whiteSpace: 'nowrap' }}>
                Sign In
            </Typography>
        </Fab>
    )
};

export default LoginButton;