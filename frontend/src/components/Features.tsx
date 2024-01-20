// frontend/src/components/Features.tsx

import { useEffect, useState } from 'react';
import { Card, CardMedia, Typography, CardContent } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/system';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import { PageLayout } from './Page-Layout';
import * as apiService from '../services/Api'
import useStore, { Feature } from '../state';
import { useAuth0 } from "@auth0/auth0-react";
import { GridApi } from '@mui/x-data-grid';
import { useShallow } from 'zustand/react/shallow';
import React from 'react';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});

const Features = () => {
    const theme = useTheme();
    // const [features, setFeatures] = useState([])
    const { getAccessTokenSilently } = useAuth0();
    const [hover, setHover] = React.useState<{ [id: number]: number | null }>({});

    const labels: { [index: string]: string } = {
        0: '',
        1: 'Not Essential',
        2: 'Nice Bonus',
        3: 'Fairly Important',
        4: 'Very Desirable',
        5: 'Non-Negotiable'
    }

    // Get features for user
    useEffect(() => {
        async function getFeatures() {
            try {
                const accessToken = await getAccessTokenSilently();
                let features: any = await apiService.getUserFeatures(accessToken)
                useStore.getState().setFeatures(features)

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        getFeatures();
    }, []);

    const features = useStore(useShallow(state => state.features.filter(f => f.rating != 0 || f.type === 'CUSTOM')))
    const rows = features.map((item: Feature) => ({ id: item.id, feature: item.feature, __check__: false, type: item.type, rating: item.rating }));

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70, align: 'left', sortable: true },
        { field: 'feature', headerName: 'Feature', width: 230, sortable: true },
        { field: 'type', headerName: 'Type', width: 130, sortable: true },
        {
            field: 'rating', headerName: 'Rating', width: 430, sortable: false,
            renderCell: (params) => {
                const id: number = Number(params.id);
                const feat = features.find(f => f.id === id)
                let rating;
                if (feat) {
                    rating = feat.rating
                }
                else {
                    rating = 0
                }
                return (
                    <Box
                        sx={{
                            width: 200,
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        onMouseEnter={() => {
                        }}
                        onMouseLeave={() => {
                            setHover((prevHover) => ({
                                ...prevHover,
                                [id]: null,
                            }));
                        }}
                    >
                        <StyledRating
                            name={`rating-${id}`}
                            color="secondary"
                            value={rating}
                            getLabelText={(value: number) => {
                                if (hover[id] !== -1) {
                                    return (
                                        `${hover} Heart${hover[id] !== 1 ? "s" : ""}, ${labels[id]} `
                                    );
                                }
                                return '';
                            }}

                            onChange={async (event, newValue) => {
                                if (newValue) {
                                    const accessToken = await getAccessTokenSilently();
                                    useStore.getState().rateFeature(id, newValue, accessToken)
                                    const feature = useStore.getState().features.find(f => f.id === id)
                                }

                            }}
                            onChangeActive={(event, newHover) => {
                                if (newHover !== hover[id]) {
                                    setHover((prevHover) => ({
                                        ...prevHover,
                                        [id]: newHover.valueOf(),
                                    }));
                                }
                            }}
                            precision={1}
                            icon={<FavoriteIcon fontSize="inherit" color='secondary' />}
                            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                        />
                        {hover && (
                            <Box sx={{ ml: 2 }}>
                                {labels[hover[id] || 0]}
                            </Box>
                        )}
                    </Box>
                )
            }
        },
    ];



    return (

        <PageLayout>
            <Container >
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} className='page-header'>
                        <Card sx={{ maxHeight: 150, boxShadow: ["none"] }}>
                            <CardMedia
                                component="img"
                                style={{ transform: 'scale(0.75)' }}
                                image="../../features-logo2.png"
                                alt="page-header-features"
                            />
                        </Card>
                    </Grid>

                    <Grid item xs={12} className='user-features-table'>
                        <Item>
                            <Typography variant="h6" style={{ flexGrow: '1' }}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            Your Features, Your Vibes
                                        </Typography>
                                        <div style={{ height: 1000, width: '100%' }}>
                                            <DataGrid
                                                rows={rows}
                                                columns={columns}
                                                slots={{ toolbar: GridToolbar }}
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Typography>
                        </Item>
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