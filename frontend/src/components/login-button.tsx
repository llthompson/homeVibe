//frontend/src/components/login-button.tsx

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useTheme } from '@mui/system';
import { Typography } from "@mui/material";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <button onClick={() => loginWithRedirect()}>
        <Typography variant="h6" style={{ flexGrow: '1' }}>
            Log In
        </Typography>
    </button>;
};

export default LoginButton;