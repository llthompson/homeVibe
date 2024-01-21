//frontend/src/components/login-button.tsx

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useTheme } from '@mui/system';
import { Typography, Button } from "@mui/material";


const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Button className='nav-bar-buttons'
            variant="contained"
            color="secondary"
            onClick={() => loginWithRedirect({
            })}>
            <Typography className='nav-bar-buttons-text'
                style={{
                    fontSize: '18px',
                }}>
                Sign In
            </Typography>
        </Button>
    )
};

export default LoginButton;