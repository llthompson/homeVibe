//frontend/src/components/Home.tsx

import { useAuth0 } from "@auth0/auth0-react";
import { useTheme } from '@mui/system';
import { Card, CardMedia, Typography, CardContent, Button } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import { PageLayout } from './Page-Layout';
import PageLogo from '../assets/homeVibelogo3.png'
import SearchingPic from '../assets/searching.jpg';
import CinemaPic from '../assets/cinema.jpg';
import LaptopPic from '../assets/laptop.jpg';
import CoolnessPic from '../assets/coolness.jpg'
import { LooksOneRounded, LooksTwoRounded, Looks3Rounded } from '@mui/icons-material';
import { Link } from "react-router-dom";


// FUTURE.ENHANCEMENTS change order of grid items on mobile

// mui setup
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Home() {
    const theme = useTheme();
    const { loginWithRedirect } = useAuth0();
    const {
        isAuthenticated
    } = useAuth0();

    return (

        <PageLayout>
            <Container className="great-grand-parent-container" sx={{ justifyContent: 'space-between' }} >

                {/* Header */}
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                    <Grid item xs={12} className='card for logo'>
                        <Card sx={{ maxHeight: 150, boxShadow: ["none"], flexGrow: 2 }}>
                            <CardMedia
                                component="img"
                                style={{ transform: 'scale(0.75)' }}
                                image={PageLogo}
                                alt="page-header-dashboard"
                            />
                        </Card>
                    </Grid>

                    <Grid item xs={12} className='slogan 1' sx={{ boxShadow: ["none"], paddingBottom: '20' }}>
                        <Item sx={{ boxShadow: ["none"], paddingBottom: '20' }}>
                            <Typography
                                variant="h2"
                                sx={{
                                    flexGrow: '10',
                                    letterSpacing: {
                                        xs: 1,
                                        sm: 5,
                                        md: 15,
                                        lg: 30
                                    },
                                    fontSize: {
                                        xs: 24,
                                        sm: 36,
                                        md: 60,
                                        lg: 60
                                    },
                                    paddingBottom: '20',
                                    color: theme.palette.secondary.main
                                }}
                            >
                                what's your vibe
                            </Typography>
                        </Item>
                    </Grid>
                </Grid>

                {/* MAIN CONTAINER FOR CONTENT COLUMNS */}
                <Grid container className="grid-parent-parent-container">

                    {/* FIRST COLUMN */}
                    <Grid item order={1} className="grid-parent-container" direction={'column'} xs={12} sm={6} md={6} lg={6}
                    >

                        <Grid item xs={12} className='first-section-image'>
                            <Card className='home-image-cards' sx={{ boxShadow: 'none' }}>
                                <CardMedia className='home-image-style'
                                    component="img"
                                    sx={{ objectFit: 'contain' }}
                                    image={CoolnessPic}
                                    alt="vector image of a cool girl"
                                />
                                <Typography variant="caption">
                                    Image by <a href="https://www.freepik.com/free-vector/coolness-concept-illustration_11435031.htm#&position=3&from_view=user&uuid=6dee6b5e-5aba-4fe8-bf61-8a14468ddbff" target="_blank" rel="noopener noreferrer">storyset</a> on Freepik
                                </Typography>
                            </Card>
                        </Grid>

                        <Grid item xs={12} className='second-section-content'>
                            <Card className='home-wordy-cards-style' sx={{ boxShadow: 'none' }} >
                                <CardContent className='home-card-content-style' >
                                    <Typography variant="h5">
                                        effortlessly mix and match your dream home features into a convenient wishlist
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} className='third-section-image'>
                            <Card className='home-image-cards' sx={{ boxShadow: 'none' }}>
                                <CardMedia className='home-image-style'
                                    component="img"
                                    sx={{ objectFit: 'contain' }}
                                    image={LaptopPic}
                                    alt="random pic"
                                />
                                <Typography variant="caption">
                                    Image by <a href="https://www.freepik.com/free-vector/laptop-concept-illustration_82455062.htm" target="_blank" rel="noopener noreferrer">storyset</a> on Freepik
                                </Typography>
                            </Card>
                        </Grid>

                        <Grid item xs={12} className='fourth-section-content'>
                            <Card className='home-wordy-cards-style' sx={{ boxShadow: 'none' }}>
                                <CardContent className='home-card-content-style' >
                                    <Typography variant="h5">
                                        now you’re ready to unleash the beast and commence the house hunt!
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    {/* SECOND COLUMN */}
                    <Grid item className="this-is-second-col" order={2} direction={'column'} xs={12} sm={6} md={6} lg={6}  >

                        <Grid item xs={12} className='first-section-content'>
                            <Card className='home-wordy-cards-style' sx={{ boxShadow: 'none' }}>
                                <CardContent className='home-card-content-style' >
                                    <Typography variant="h5">
                                        an innovative house-hunting tool for the next generation of homebuyers
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} className='second-section-image'>
                            <Card className='home-image-cards' sx={{ boxShadow: 'none' }}>
                                <CardMedia className='home-image-style'
                                    component="img"
                                    sx={{ objectFit: 'contain' }}
                                    image={CinemaPic}
                                    alt="homeVibe logo"
                                />
                                <Typography variant="caption">
                                    Image by <a href="https://www.freepik.com/free-vector/home-cinema-concept-illustration_12325307.htm" target="_blank" rel="noopener noreferrer">storyset</a> on Freepik
                                </Typography>
                            </Card>
                        </Grid>

                        <Grid item xs={12} className='third-section-content'>
                            <Card className='home-wordy-cards-style here-is-a-third-content-style' sx={{ boxShadow: 'none', marginLeft: '30' }}>
                                <CardContent className='home-card-content-style here-is-a-third-content-style' >
                                    <Typography variant="h5" >
                                        three easy steps:
                                    </Typography>
                                    <Typography variant='body1'>
                                        <span style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', paddingLeft: 10 }}>
                                            <LooksOneRounded />
                                            rate home features
                                        </span>
                                        <span style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', paddingLeft: 10 }}>
                                            <LooksTwoRounded />
                                            add custom features
                                        </span>
                                        <span style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', paddingLeft: 10, flexWrap: 'wrap' }}>
                                            <Looks3Rounded />
                                            use your results to shop til' you drop
                                        </span>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} className='fourth-section-image'>
                            <Card className='home-image-cards' sx={{ boxShadow: 'none' }}>
                                <CardMedia className='home-image-style'
                                    component="img"
                                    sx={{ objectFit: 'contain' }}
                                    image={SearchingPic}
                                    alt="homeVibe logo"
                                />
                                <Typography variant="caption">
                                    Image by <a href="https://www.freepik.com/free-vector/searching-opportunities-concept-illustration_106347373.htm" target="_blank" rel="noopener noreferrer">storyset</a> on Freepik
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Footer */}
                <Grid>
                    {!isAuthenticated ?
                        < Grid item xs={12} className='sign-up-button-to-start-button' sx={{ boxShadow: 'none' }}>
                            <Item sx={{ boxShadow: 'none' }}><Typography variant="h3" style={{ flexGrow: '6' }}>sign up to create your list</Typography>
                                <Fab variant="extended" color="secondary" onClick={() => loginWithRedirect({
                                    authorizationParams: {
                                        screen_hint: "signup"
                                    }
                                })}>
                                    <NavigationIcon sx={{ mr: 1 }} />
                                    <Typography variant="h4" style={{ flexGrow: '6' }}>
                                        SIGN UP
                                    </Typography>
                                </Fab>
                            </Item>
                        </Grid>
                        :
                        < Grid item xs={12} className='sign-up-button-to-start-button' sx={{ boxShadow: 'none' }}>
                            <Item sx={{ boxShadow: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center' }}><Typography variant="h3" style={{ flexGrow: '6' }}>let's get vibin'</Typography>
                                <Button className='start-button-logic'
                                    sx={{ display: 'flex', marginTop: '8px', marginBottom: '100px' }}
                                    variant="contained"
                                    color="secondary"
                                >
                                    <Link
                                        to="/VibeBuilder"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Typography
                                            style={{
                                                fontSize: '18px',
                                                marginBottom: 0,
                                                whiteSpace: 'nowrap',
                                                color: '#ffffff',
                                                paddingTop: '1px',
                                            }}>
                                            Start
                                        </Typography>
                                    </Link>
                                </Button>
                            </Item>
                        </Grid>
                    }
                </Grid>

            </Container>
        </PageLayout >
    );
}

export default Home;
