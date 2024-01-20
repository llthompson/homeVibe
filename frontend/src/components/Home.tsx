//frontend/src/components/Home.tsx

import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/system';
import { Card, CardMedia, Typography, CardContent } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Link } from 'react-router-dom';
import { PageLayout } from './Page-Layout';
// import Box from '@mui/material/Box';
// import { Image } from '@mui/icons-material';
// import Button from '@mui/material/Button';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function Home() {
    const theme = useTheme();
    // const [features, setFeatures] = useState([])

    return (

        <PageLayout>
            <Container sx={{ justifyContent: 'space-between' }} >
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                    <Grid item xs={12} className='card for logo'>
                        <Card sx={{ maxHeight: 150, boxShadow: ["none"], flexGrow: 2 }}>
                            <CardMedia
                                component="img"
                                style={{ transform: 'scale(.75)' }}
                                image="../../homeVibelogo3.png"
                                alt="homeVibe logo"
                            />
                        </Card>
                    </Grid>

                    <Grid item xs={12} className='slogan 1'>
                        <Item sx={{ boxShadow: ["none"] }}>
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
                                    color: theme.palette.secondary.main
                                }}
                            >
                                what's your vibe
                            </Typography>
                        </Item>
                    </Grid>
                </Grid>

                {/* MAIN CONTAINER FOR CONTENT COLUMNS */}
                <Grid container>
                    <Grid item direction={'column'} xs={6}  >
                        {/* FIRST COLUMN */}

                        <Grid item xs={12} className='first section image'>
                            <Card sx={{
                                display: 'flex',
                                margin: '0 auto',
                                padding: '0.1em',
                                justifyContent: 'space-between',
                            }}>
                                <CardMedia
                                    component="img"
                                    sx={{ height: 284, padding: '1em 1em 0 1em', objectFit: 'contain', justifyContent: 'right' }}
                                    height="10%"
                                    image="../../house-icon.png"
                                    alt="homeVibe logo"
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={12} className='second section content'>
                            <Card sx={{
                                display: 'flex',
                                margin: '0 auto',
                                padding: '0.1em',
                                justifyContent: 'space-between',
                            }}>
                                <CardContent className='box 2 content' sx={{ height: 76, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <Typography component="div" variant="h5">
                                        effortlessly mix and match your dream home features into a convenient wishlist
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} className='third section image'>
                            <Card sx={{
                                display: 'flex',
                                margin: '0 auto',
                                padding: '0.1em',
                                justifyContent: 'space-between',
                            }}>
                                <CardMedia
                                    className='box 3 pic'
                                    component="img"
                                    sx={{ height: 284, padding: '1em 1em 0 1em', objectFit: 'contain' }}
                                    height="10%"
                                    image="../../house-icon.png"
                                    alt="random pic"
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={12} className='fourth section content'>
                            <Card sx={{
                                display: 'flex',
                                margin: '0 auto',
                                padding: '0.1em',
                                justifyContent: 'space-between',
                            }}>
                                <CardContent className='box 4 content' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <Typography component="div" variant="h5">
                                        now you’re ready to unleash the beast and commence the house hunt!
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                    </Grid>
                    {/* SECOND COLUMN */}
                    <Grid item direction={'column'} xs={6}  >

                        <Grid item xs={12} className='first section content'>
                            <Card sx={{
                                display: 'flex',
                                margin: '0 auto',
                                padding: '0.1em',
                                justifyContent: 'space-between',
                            }}>
                                <CardContent className='box 1 content' sx={{ height: 76, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <Typography component="div" variant="h5">
                                        an innovative house-hunting tool for the next generation of homebuyers
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} className='second section image'>
                            <Card sx={{
                                display: 'flex',
                                margin: '0 auto',
                                padding: '0.1em',
                                justifyContent: 'space-between',
                            }}>
                                <CardMedia
                                    component="img"
                                    sx={{ height: 284, padding: '1em 1em 0 1em', objectFit: 'contain' }}
                                    height="10%"
                                    image="../../house-icon.png"
                                    alt="homeVibe logo"
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={12} className='third section content'>
                            <Card sx={{
                                display: 'flex',
                                margin: '0 auto',
                                padding: '0.1em',
                                justifyContent: 'space-between',
                            }}>
                                <CardContent className='box 3 content' sx={{ height: 76, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <Typography component="div" variant="h5" sx={{ alignItems: 'center' }}>
                                        three easy steps
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} className='fourth section image'>
                            <Card sx={{
                                display: 'flex',
                                margin: '0 auto',
                                padding: '0.1em',
                                justifyContent: 'space-between',
                            }}>
                                <CardMedia
                                    component="img"
                                    sx={{ height: 284, padding: '1em 1em 0 1em', objectFit: 'contain' }}
                                    height="10%"
                                    image="../../house-icon.png"
                                    alt="homeVibe logo"
                                />
                            </Card>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid>
                    the end of all the columns and the content and the page really and im going to keep typing forever just so that nothing can ever live here and it will be all alone
                    <Grid item xs={12} className='sign up button'>
                        <Item><Typography variant="h1" style={{ flexGrow: '6' }}>sign up to start vibin'</Typography>
                            <Fab variant="extended" color="info">
                                <NavigationIcon sx={{ mr: 1 }} />
                                <Typography variant="h4" style={{ flexGrow: '6' }}>
                                    SIGN UP
                                </Typography>
                            </Fab>
                        </Item>
                    </Grid>
                </Grid>
            </Container>
        </PageLayout >
    );
}

export default Home;
