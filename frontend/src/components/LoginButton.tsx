//frontend/src/components/login-button.tsx

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useTheme } from '@mui/system';
import { Typography, Button } from "@mui/material";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Button
            sx={{
                display: 'flex'
            }}
            variant="contained"
            color="secondary"
            onClick={() => loginWithRedirect({
                authorizationParams: {
                    screen_hint: "signup"
                }
            })}>
            <Typography
                style={{
                    fontSize: '18px',
                    marginBottom: 0,
                    whiteSpace: 'nowrap'
                }}>
                Sign In
            </Typography>
        </Button>
    )
};

export default LoginButton;