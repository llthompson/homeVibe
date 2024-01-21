// frontend/src/components/Navigation.js

import React from 'react';
import { AppBar, Toolbar, Typography, List, ListItem, Link as RouterLink } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme, shadows, Container } from '@mui/system';
import LoginButton from './LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import SignUpButton from './SignUpButton';
import MiniLogo from '../assets/homeVibelogo2transparenticon.png'
import { Image } from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';


// TODO hide menu items from unauthenticated users
// TODO switch menu navigation on small screens
// TODO cleanup unused code, add comments

const Navigation = () => {
    const theme = useTheme();
    const {
        isAuthenticated
    } = useAuth0();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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


                        <ListItem sx={{ justifyContent: 'center ' }}>
                            <Link to="/Dashboard" style={{ textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '4px', textDecorationColor: '#333333' }}>
                                <Typography style={{ whiteSpace: 'nowrap', fontSize: '18px', marginBottom: 0, color: '#333333', fontWeight: '500' }}>
                                    Rate Features
                                </Typography>
                            </Link>
                        </ListItem>


                        <ListItem sx={{ justifyContent: 'center ' }}>
                            <Link to="/Features" style={{ textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '4px', textDecorationColor: '#333333' }}>
                                <Typography style={{ whiteSpace: 'nowrap', fontSize: '18px', marginBottom: 0, color: '#333333', fontWeight: '500' }}>
                                    Saved Features
                                </Typography>
                            </Link>
                        </ListItem>


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




        // <AppBar
        //     sx={{
        //         bgcolor: theme.palette.primary.main,
        //         maxWidth: '100%',
        //         // display: 'flex',
        //         // flexDirection: 'column'
        //     }}
        //     position="sticky">
        //     <Toolbar
        //         sx={{
        //             display: 'flex',
        //             flexDirection: 'column',
        //             // alignItems: 'right',
        //             justifyContent: 'left',
        //             '@media (min-width: 848px)': {
        //                 flexDirection: 'row', // Change back to row on larger screens
        //             },
        //         }}

        //     >

        //         <List className="nav-list"
        //             sx={{
        //                 display: 'flex',
        //                 flexDirection: 'column',
        //                 alignItems: 'left',
        //                 justifyContent: 'left',
        //                 alignContent: 'left',
        //                 textAlign: 'center',
        //                 maxWidth: '1080',
        //                 '@media (min-width: 848px)': {
        //                     flexDirection: 'row', // Change back to row on larger screens
        //                 },
        //             }}>

        //             <ListItem style={{ padding: '0' }} >
        //                 <Link to="/">
        //                     <img src={MiniLogo} style={{ height: '42px', width: 'auto' }} ></img>
        //                 </Link>
        //             </ListItem>

        //             <ListItem>
        //                 <Link to="/" style={{ textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '4px', textDecorationColor: '#333333' }}>
        //                     <Typography style={{ whiteSpace: 'nowrap', fontSize: '18px', marginBottom: 0, color: '#333333', fontWeight: '500' }}>
        //                         Home
        //                     </Typography>
        //                 </Link>
        //             </ListItem>

        // <ListItem>
        //     <Link to="/Dashboard" style={{ textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '4px', textDecorationColor: '#333333' }}>
        //         <Typography style={{ whiteSpace: 'nowrap', fontSize: '18px', marginBottom: 0, color: '#333333', fontWeight: '500' }}>
        //             Rate Features
        //         </Typography>
        //     </Link>
        // </ListItem>







        //         </List>
        //     </Toolbar>
        // </AppBar>

    );
};

export default Navigation;
