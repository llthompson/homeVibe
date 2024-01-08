//frontend/src/components/Navigation.js

import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Link as RouterLink } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
import { Link, } from 'react-router-dom';
import LoginButton from './login-button';


const Navigation = () => {




    return (
        <AppBar sx={{ bgcolor: 'success.main' }} position="relative">
            <Toolbar>
                <IconButton color="inherit">
                    {/* <MenuIcon /> */}
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: '1' }}>
                    homeVibe
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className='login'>
                        <LoginButton></LoginButton>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;