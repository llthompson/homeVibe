//frontend/src/components/login-button.tsx

import { useAuth0 } from "@auth0/auth0-react";
import { Typography, Button } from "@mui/material";


const SignUpButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Button className='nav-bar-buttons'
            variant="contained"
            color="secondary"
            onClick={() => loginWithRedirect({
                authorizationParams: {
                    screen_hint: "signup"
                }
            })}>
            <Typography className='nav-bar-buttons-text'
                style={{
                    fontSize: '18px',
                }}>
                Sign Up
            </Typography>
        </Button>
    )
};

export default SignUpButton;