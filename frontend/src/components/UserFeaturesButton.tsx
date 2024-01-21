//frontend/src/components/login-button.tsx

import React from "react";
import { useTheme } from '@mui/system';
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";


// TODO DELETE WHOLE FILE, tried something didn't work lol

const UserFeaturesButton = () => {

    return (
        <Button className='nav-bar-buttons'
            variant="contained"
            color="secondary"
        >
            <Link to="/Features" style={{ textDecoration: 'none' }}>
                <Typography className='nav-bar-buttons-text'
                    style={{
                        fontSize: '18px',
                        textTransform: 'capitalize',
                        color: '#ffffff'
                    }}>
                    Your Feature List
                </Typography>
            </Link>
        </Button>
    )
};

export default UserFeaturesButton;