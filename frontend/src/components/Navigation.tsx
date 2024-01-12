// frontend/src/components/Navigation.js

import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, List, ListItem, Link as RouterLink } from '@mui/material';
// import MenuIcon from "@material-ui/icons/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/system';
import LoginButton from './login-button';

const Navigation = () => {
    const theme = useTheme();

    return (
        <AppBar sx={{ bgcolor: theme.palette.primary.main }} position="relative">
            <Toolbar>

                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2, color: theme.palette.info.dark }}
                >
                    <MenuIcon />
                </IconButton>

                <Typography variant="h6" style={{ flexGrow: '1', textAlign: 'center', color: theme.palette.info.dark }}>
                    homeVibe
                </Typography>

                <List className="nav-list" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <ListItem>
                        <Link to="/Dashboard" style={{ textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px', textDecorationColor: '#8d008d' }}>
                            <Typography style={{ fontSize: '18px', marginBottom: 0, color: theme.palette.info.dark }}>
                                Dashboard
                            </Typography>
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Link to="/Features" style={{ textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px', textDecorationColor: '#8d008d' }}>
                            <Typography style={{ fontSize: '18px', marginBottom: 0, color: theme.palette.info.dark }}>
                                Features
                            </Typography>
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Link to="/" style={{ textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px', textDecorationColor: '#8d008d' }}>
                            <Typography style={{ fontSize: '18px', marginBottom: 0, color: theme.palette.info.dark }}>
                                Home
                            </Typography>
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Link to="/LearnMore" style={{ textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px', textDecorationColor: '#8d008d' }}>
                            <Typography style={{ fontSize: '18px', marginBottom: 0, whiteSpace: 'nowrap', color: theme.palette.info.dark }}>
                                Learn More
                            </Typography>
                        </Link>
                    </ListItem>

                    <ListItem className='login'>
                        <LoginButton></LoginButton>
                    </ListItem>
                </List>

            </Toolbar>
        </AppBar>
    );
};

export default Navigation;
