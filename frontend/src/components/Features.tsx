// frontend/src/components/Features.tsx

import { useEffect, useState } from 'react';
import { Card, Typography, CardContent } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/system';
import Paper from '@mui/material/Paper';
// import Fab from '@mui/material/Fab';
// import NavigationIcon from '@mui/icons-material/Navigation';
import { Link } from 'react-router-dom';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { PageLayout } from './Page-Layout';
import CreateFeatureDialog from './CreateFeature';
import * as apiService from '../services/Api'
import { useAuth0 } from "@auth0/auth0-react";



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Features = () => {
    const theme = useTheme();
    const [features, setFeatures] = useState([])
    const { getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        async function getCenter() {
            try {
                // let response = await fetch(`http://localhost:8000`);
                // if (!response.ok) {
                //     throw new Error(`HTTP error! Status: ${response.status}`);
                // }
                // const responseJson = await response.json();
                const accessToken = await getAccessTokenSilently();

                let features: any = await apiService.getUserFeatures(accessToken)
                setFeatures(features);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        getCenter();
    }, []);

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70, align: 'left', sortable: false },
        { field: 'feature', headerName: 'Feature', width: 130, sortable: false },
        { field: 'type', headerName: 'Type', width: 130, sortable: false },
        { field: '__check__', headerName: 'Box', align: 'center', headerClassName: 'custom-header', sortable: false },
    ];

    const rows = features.map((item: any) => ({ id: item.id, feature: item.feature, __check__: false, type: item.type }));

    return (

        <PageLayout>
            <Container >

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                    <Grid item xs={12} className='page-header'>
                        <Card>
                            <Typography variant="h1" style={{ flexGrow: '1', fontFamily: 'Galada, cursive', textAlign: 'center', paddingTop: '43px', color: theme.palette.primary.main }}>
                                Features
                            </Typography>
                        </Card>
                    </Grid>

                    <Grid item xs={12} className='add-custom'>
                        <Card sx={{
                            display: 'flex',
                            margin: "0 auto",
                            padding: "0.1em",
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <CardContent className='add-custom-feature' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                                <CreateFeatureDialog></CreateFeatureDialog>

                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={6} className='stan-feature'>
                        <Item>
                            <Typography variant="h6" style={{ flexGrow: '1' }}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            Choose Standard Features
                                        </Typography>
                                        <div style={{ height: 400, width: '100%' }}>
                                            <DataGrid
                                                rows={rows.filter(r => r.type === 'STANDARD')}
                                                columns={columns}
                                                // pageSize={5}
                                                checkboxSelection
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Typography>
                        </Item>
                    </Grid>

                    <Grid item xs={6} className='adv-feature'>
                        <Item>
                            <Typography variant="h6" style={{ flexGrow: '1' }}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            Choose Advanced Features
                                        </Typography>
                                        <div style={{ height: 400, width: '100%' }}>
                                            <DataGrid
                                                rows={rows.filter(r => r.type === 'ADVANCED')}
                                                columns={columns}
                                                // pageSize={5}
                                                checkboxSelection
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Typography>
                        </Item>
                    </Grid>

                    <Grid item xs={12} className='user-features-table'>
                        <Item>
                            <Typography variant="h6" style={{ flexGrow: '1' }}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            Your Features, Your Vibes
                                        </Typography>
                                        <div style={{ height: 400, width: '100%' }}>
                                            <DataGrid
                                                rows={rows}
                                                columns={columns}
                                                // pageSize={5}
                                                checkboxSelection
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Typography>
                        </Item>
                    </Grid>



                    <Grid item xs={12} className='second empty box'>
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

                    <Grid item xs={12} className='third empty box'>
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

                    <Grid item xs={12} className='fourth empty box'>
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

                        </Item>
                    </Grid>

                </Grid>

            </Container >
        </PageLayout>
    );
};

export default Features;