//frontend/src/components/Home.tsx

import React, { useEffect, useState } from 'react';
import { maxHeight, useTheme } from '@mui/system';
import { Card, CardMedia, Typography, CardContent } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Image } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Link } from 'react-router-dom';

// import './Home.css';
// import LoginButton from './login-button';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



function Home() {
    const theme = useTheme();
    const [features, setFeatures] = useState([])

    useEffect(() => {
        async function getCenter() {
            try {
                let response = await fetch(`http://localhost:8000`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const responseJson = await response.json();
                setFeatures(responseJson);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        getCenter();
    }, []);

    return (
        <Container >
            {/* 

            <Typography variant="h6" style={{ flexGrow: '1' }}>
                am i in a box homeVibe
            </Typography> */}



            {/* <div className="Home">
                    <h1>head</h1>
                    <h3>middle</h3>
                    <p>para</p>
                    <p>
                        <ul>
                            {features.map((item: any) => <li key={item.id}>{item.feature}</li>)}
                        </ul>
                    </p>
                </div> */}

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="320"
                            image="../../homeVibelogo1.png"
                            alt="homeVibe logo"
                        />
                        {/* <img src='../../homeVibelogo1.png' /> */}
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Item><Typography variant="h2" style={{ flexGrow: '1' }}>what's</Typography></Item>
                </Grid>
                <Grid item xs={4}>
                    <Item><Typography variant="h2" style={{ flexGrow: '1' }}>your</Typography></Item>
                </Grid>
                <Grid item xs={4}>
                    <Item><Typography variant="h2" style={{ flexGrow: '1' }}>vibe</Typography></Item>
                </Grid>
                <Grid className='first box' item xs={12}>
                    <Card sx={{
                        display: 'flex',
                        margin: "0 auto",
                        padding: "0.1em",
                    }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 400, height: 250, padding: "1em 1em 0 1em", objectFit: "contain" }}
                            // height={maxHeight: 20px}
                            height="10%"
                            // width="20"
                            image="../../house-icon.png"
                            alt="homeVibe logo"
                        />
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                cool content
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid className='second box' item xs={12}>
                    <Card sx={{
                        display: 'flex',
                        margin: "0 auto",
                        padding: "0.1em",
                    }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                cool content
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            sx={{ width: 400, height: 250, padding: "1em 1em 0 1em", objectFit: "contain" }}
                            // height={maxHeight: 20px}
                            height="10%"
                            // width="20"
                            image="../../house-icon.png"
                            alt="homeVibe logo"
                        />

                    </Card>
                </Grid>
                <Grid className='third box' item xs={12}>
                    <Card sx={{
                        display: 'flex',
                        margin: "0 auto",
                        padding: "0.1em",
                    }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 400, height: 250, padding: "1em 1em 0 1em", objectFit: "contain" }}
                            // height={maxHeight: 20px}
                            height="10%"
                            // width="20"
                            image="../../house-icon.png"
                            alt="homeVibe logo"
                        />
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                cool content
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid className='fourth box' item xs={12}>
                    <Card sx={{
                        display: 'flex',
                        margin: "0 auto",
                        padding: "0.1em",
                    }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            
                                <Link to="./LearnMore">
                                <Typography component="div" variant="h5">
                                    Learn More
                                    </Typography>
                                </Link>
                            
                        </CardContent>
                        <CardMedia
                            component="img"
                            sx={{ width: 400, height: 250, padding: "1em 1em 0 1em", objectFit: "contain" }}
                            // height={maxHeight: 20px}
                            height="10%"
                            // width="20"
                            image="../../house-icon.png"
                            alt="homeVibe logo"
                        />

                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Item><Typography variant="h1" style={{ flexGrow: '6' }}>sign up to start vibin'</Typography>
                        <Fab variant="extended" color="primary">
                            <NavigationIcon sx={{ mr: 1 }} />
                            SIGN UP
                        </Fab>
                    </Item>
                </Grid>

            </Grid>



        </Container>
    );
}

export default Home;
