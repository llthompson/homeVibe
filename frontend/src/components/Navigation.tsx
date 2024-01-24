// frontend/src/components/Navigation.js

import React from 'react';
import { AppBar, Toolbar, Typography, List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme, Container } from '@mui/system';
import LoginButton from './LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import SignUpButton from './SignUpButton';
import MiniLogo from '../assets/homeVibelogo2transparenticon.png'


// FUTURE.ENHANCEMENTS on mobile, change smaller nav links to menu icon

const Navigation = () => {
    const theme = useTheme();
    const {
        isAuthenticated
    } = useAuth0();

    return (
        <AppBar position="sticky">
            <Container>
                <Toolbar
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        '@media (min-width: 848px)': {
                            flexDirection: 'row'
                        }
                    }}
                >
                    <Link to="/">
                        <img src={MiniLogo} style={{ height: '42px', width: 'auto', justifyContent: 'center' }} ></img>
                    </Link>

                    <List
                        sx={{
                            display: 'flex',
                            padding: '0 0 0 0',
                            alignContent: 'center',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            '@media (min-width: 848px)': {
                                flexDirection: 'row '
                            }
                        }}
                    >

                        <ListItem sx={{ justifyContent: 'center ' }}>
                            <Link to="/LearnMore" style={{ textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '4px', textDecorationColor: '#333333' }}>
                                <Typography style={{ whiteSpace: 'nowrap', fontSize: '18px', marginBottom: 0, color: '#333333', fontWeight: '500' }}>
                                    Learn More
                                </Typography>
                            </Link>
                        </ListItem>

                        {!isAuthenticated ? null :
                            <ListItem sx={{ justifyContent: 'center ' }}>
                                <Link to="/VibeBuilder" style={{ textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '4px', textDecorationColor: '#333333' }}>
                                    <Typography style={{ whiteSpace: 'nowrap', fontSize: '18px', marginBottom: 0, color: '#333333', fontWeight: '500' }}>
                                        Rate Features
                                    </Typography>
                                </Link>
                            </ListItem>}

                        {!isAuthenticated ? null :
                            <ListItem
                                sx={{ justifyContent: 'center ' }} >
                                <Link to="/Features" style={{ textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '4px', textDecorationColor: '#333333' }}>
                                    <Typography style={{ whiteSpace: 'nowrap', fontSize: '18px', marginBottom: 0, color: '#333333', fontWeight: '500' }}>
                                        Saved Features
                                    </Typography>
                                </Link>
                            </ListItem>}


                        <ListItem
                            className='signup'
                            sx={{ justifyContent: 'center ' }}>
                            {isAuthenticated ? null : <SignUpButton></SignUpButton>}
                        </ListItem>

                        <ListItem
                            className='login'
                            sx={{ justifyContent: 'center ' }}>
                            {!isAuthenticated ?
                                <LoginButton></LoginButton> : <LogoutButton></LogoutButton>}
                        </ListItem>

                    </List>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navigation;