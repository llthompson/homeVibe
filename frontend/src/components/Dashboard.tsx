// frontend/src/components/Dashboard.tsx

import { Card, CardMedia, Typography, CardContent, Button } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/system';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { PageLayout } from './Page-Layout';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Dashboard = () => {

    console.log('hmm work peze')
    const theme = useTheme();
    const { getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        let isMounted = true;

        const getMessage = async () => {
            const accessToken = await getAccessTokenSilently();
            // const { data, error } = await getProtectedResource(accessToken);

            if (!isMounted) {
                return;
            }

            // if (data) {
            //     // setMessage(JSON.stringify(data, null, 2));
            // }

            // if (error) {
            //     // setMessage(JSON.stringify(error, null, 2));
            // }
        };

        getMessage();

        return () => {
            isMounted = false;
        };
    }, [getAccessTokenSilently]);

    return (
        <PageLayout>
            <Container>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} className='page-header'>
                        <Card sx={{ maxHeight: 150, boxShadow: ["none"] }}>
                            <CardMedia
                                component="img"
                                style={{ transform: 'scale(0.75)' }}
                                image="../../dashboard-logo2.png"
                                alt="page-header-dashboard"
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={4} className='empty 1'>
                        <Item><Typography variant="h2" style={{ flexGrow: '1' }}>empty</Typography></Item>
                    </Grid>
                    <Grid item xs={4} className='empty 2'>
                        <Item><Typography variant="h2" style={{ flexGrow: '1' }}>empty</Typography></Item>
                    </Grid>
                    <Grid item xs={4} className='empty 3'>
                        <Item><Typography variant="h2" style={{ flexGrow: '1' }}>empty</Typography></Item>
                    </Grid>
                    <Grid item xs={12} className='blank1'>
                        <Card sx={{
                            display: 'flex',
                            margin: "0 auto",
                            padding: "0.1em",
                        }}>
                            <CardContent className='empty box 1 content' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Typography component="div" variant="h5">
                                    blank content #1
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} className='blank2'>
                        <Card sx={{
                            display: 'flex',
                            margin: "0 auto",
                            padding: "0.1em",
                        }}>
                            <CardContent className='empty box 2 content' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Typography component="div" variant="h5">
                                    blank content #2
                                </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid item xs={12} className='blank3'>
                        <Card sx={{
                            display: 'flex',
                            margin: "0 auto",
                            padding: "0.1em",
                        }}>

                            <CardContent className='empty box 3 content'
                                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Typography component="div" variant="h5" sx={{ alignItems: 'center' }}>
                                    blank content #3
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} className='link to nowhere'>
                        <Card sx={{
                            display: 'flex',
                            margin: "0 auto",
                            padding: "0.1em",
                        }}>
                            <CardContent className='empty box 4 content' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                                <Link to="/">
                                    <Typography component="div" variant="h5">
                                        link to nowhere
                                    </Typography>
                                </Link>

                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid item xs={12} className='pointless button'>
                        <Item><Typography variant="h1" style={{ flexGrow: '6' }}>nothing to see here</Typography>
                            <Fab variant="extended" style={{ flexGrow: '6', backgroundColor: theme.palette.info.main }}>
                                <NavigationIcon sx={{ mr: 1, color: theme.palette.secondary.contrastText }} />
                                <Typography variant="h4" style={{ flexGrow: '6', color: theme.palette.secondary.contrastText }}>
                                    BIG BUTTON
                                </Typography>
                            </Fab>
                        </Item>
                    </Grid>

                </Grid>

            </Container>
        </PageLayout>
    );
};

export default Dashboard;