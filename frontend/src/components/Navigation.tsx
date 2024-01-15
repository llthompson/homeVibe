// frontend/src/components/Navigation.js

import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, List, ListItem, Link as RouterLink } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/system';
import LoginButton from './LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Navigation = () => {
    const theme = useTheme();
    const {
        isAuthenticated,
        loginWithRedirect,
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
        <AppBar sx={{ bgcolor: theme.palette.primary.main }} position="relative">
            <Toolbar>


                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleClick}
                    sx={{ mr: 2, color: theme.palette.info.dark }}
                >
                    <MenuIcon />
                </IconButton>

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}><Link to="/Dashboard" style={{ textDecoration: 'none', textDecorationThickness: '2px', textUnderlineOffset: '4px', textDecorationColor: '#8d008d' }}>
                        <Typography style={{ fontSize: '18px', marginBottom: 0, color: theme.palette.info.dark }}>
                            Dashboard
                        </Typography>
                    </Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/Features" style={{ textDecoration: 'none', textDecorationThickness: '2px', textUnderlineOffset: '4px', textDecorationColor: '#8d008d' }}>
                        <Typography style={{ fontSize: '18px', marginBottom: 0, color: theme.palette.info.dark }}>
                            Features
                        </Typography>
                    </Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/LearnMore" style={{ textDecoration: 'none', textDecorationThickness: '2px', textUnderlineOffset: '4px', textDecorationColor: '#8d008d' }}>
                        <Typography style={{ fontSize: '18px', marginBottom: 0, whiteSpace: 'nowrap', color: theme.palette.info.dark }}>
                            Learn More
                        </Typography>
                    </Link></MenuItem>
                    {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
                    {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
                </Menu>


                {/* <Typography variant="h1" style={{ flexGrow: '1', fontFamily: 'Galada, cursive', fontSize: '36px', textAlign: 'center', color: theme.palette.secondary.contrastText }}>
                    homeVibe
                </Typography> */}

                <List className="nav-list" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
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
                        {isAuthenticated ? <LoginButton></LoginButton> : <LogoutButton></LogoutButton>}


                    </ListItem>
                </List>

            </Toolbar>
        </AppBar>
    );
};

export default Navigation;
