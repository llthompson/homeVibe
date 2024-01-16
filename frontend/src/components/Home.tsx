//frontend/src/components/Home.tsx

import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/system';
import { Card, CardMedia, Typography, CardContent } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// import { Image } from '@mui/icons-material';
// import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Link } from 'react-router-dom';
import { PageLayout } from './Page-Layout';
import { blue, green, red } from '@mui/material/colors';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // [theme.breakpoints.down('md')]: {
    //     // backgroundColor: red[500],
    //     fontSize: 20

    // },
    // [theme.breakpoints.up('md')]: {
    //     // backgroundColor: blue[500],
    //     fontSize: 5
    // },
    // [theme.breakpoints.up('lg')]: {
    //     // backgroundColor: green[500],
    //     fontSize: 50
    // },
}));


function Home() {
    const theme = useTheme();
    const [features, setFeatures] = useState([])

    // useEffect(() => {
    //     async function getCenter() {
    //         try {
    //             let response = await fetch(`http://localhost:8000`);
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! Status: ${response.status}`);
    //             }
    //             const responseJson = await response.json();
    //             setFeatures(responseJson);
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //         }
    //     }

    //     getCenter();
    // }, []);

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

                    <Grid item xs={12} className='first box'>
                        <Card sx={{
                            display: 'flex',
                            margin: "0 auto",
                            padding: "0.1em",
                            justifyContent: 'space-between'
                        }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 200, height: 150, padding: "1em 1em 0 1em", objectFit: "contain", justifyContent: "right" }}
                                height="10%"
                                image="../../house-icon.png"
                                alt="homeVibe logo"
                            />
                            <CardContent className='box 1 content' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Typography component="div" variant="h5">
                                    cool content
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} className='second box'>
                        <Card sx={{
                            display: 'flex',
                            margin: "0 auto",
                            padding: "0.1em",
                            justifyContent: 'space-between'
                        }}>
                            <CardContent className='box 2 content' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Typography component="div" variant="h5">
                                    cool content
                                </Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                sx={{ width: 200, height: 150, padding: "1em 1em 0 1em", objectFit: "contain" }}
                                // height={maxHeight: 20px}
                                height="10%"
                                // width="20"
                                image="../../house-icon.png"
                                alt="homeVibe logo"
                            />

                        </Card>
                    </Grid>
                    <Grid item xs={12} className='third box'>
                        <Card sx={{
                            display: 'flex',
                            margin: "0 auto",
                            padding: "0.1em",
                            justifyContent: 'space-between'
                        }}>
                            <CardMedia
                                className='box 3 pic'
                                component="img"
                                sx={{ width: 200, height: 150, padding: "1em 1em 0 1em", objectFit: "contain" }}
                                height="10%"
                                image="../../house-icon.png"
                                alt="random pic"
                            />
                            <CardContent className='box 3 content'
                                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Typography component="div" variant="h5" sx={{ alignItems: 'center' }}>
                                    cool content #3
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} className='fourth box'>
                        <Card sx={{
                            display: 'flex',
                            margin: "0 auto",
                            padding: "0.1em",
                            justifyContent: 'space-between'
                        }}>
                            <CardContent className='box 4 content' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                                <Link to="./LearnMore">
                                    <Typography component="div" variant="h5">
                                        Learn More
                                    </Typography>
                                </Link>

                            </CardContent>
                            <CardMedia
                                component="img"
                                sx={{ width: 200, height: 150, padding: "1em 1em 0 1em", objectFit: "contain" }}
                                // height={maxHeight: 20px}
                                height="10%"
                                // width="20"
                                image="../../house-icon.png"
                                alt="homeVibe logo"
                            />

                        </Card>
                    </Grid>
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
        </PageLayout>
    );
}

export default Home;
