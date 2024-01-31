// frontend/src/components/Features.tsx

import { useEffect } from 'react';
import { Card, CardMedia, Typography, CardContent, useMediaQuery } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { Theme, useTheme } from '@mui/system';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { PageLayout } from './Page-Layout';
import * as apiService from '../services/Api'
import useStore, { Feature } from '../state';
import { useAuth0 } from "@auth0/auth0-react";
import { useShallow } from 'zustand/react/shallow';
import React from 'react';
import PageLogo from '../assets/features-logo2.png'


// Mui setup
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

// Rating icon color
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
    const { getAccessTokenSilently } = useAuth0();
    const [hover, setHover] = React.useState<{ [id: number]: number | null }>({});

    // Rating labels
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

    // Logic for pulling in features to rows
    const features = useStore(useShallow(state => state.features.filter(f => f.rating != 0 || f.type === 'CUSTOM')))
    const rows = features.map((item: Feature) => ({ id: item.id, feature: item.feature, __check__: false, type: item.type, rating: item.rating }));
    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const [columnVisibilityModel, setColumnVisibilityModel] = React.useState({
        // Initially hide id and type on smaller screens
        id: isSmallScreen ? false : true,
        feature: true,
        type: isSmallScreen ? false : true,
        rating: true,
    });

    const handleColumnVisibilityModelChange = (newModel: any) => {
        setColumnVisibilityModel(newModel);
    };


    // Table setup, rating logic
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', flex: .05, align: 'left', sortable: true, resizable: false },
        { field: 'feature', headerName: 'Feature', flex: isSmallScreen ? 0.55 : 0.25, sortable: true, resizable: true },
        { field: 'type', headerName: 'Type', flex: .15, sortable: true, resizable: false },
        {
            field: 'rating', headerName: 'Rating', flex: isSmallScreen ? 0.45 : 0.55, sortable: true, resizable: false,
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
                                image={PageLogo}
                                alt="page-header-dashboard"
                            />
                        </Card>
                    </Grid>

                    <Grid item xs={12} className='user-features-table'>
                        <Item>
                            <Typography variant="h6" style={{ flexGrow: '1' }}>
                                <CardContent className='card-content-for-resize'>
                                    <Typography variant="h6" style={{
                                        fontSize: '24px',
                                        marginBottom: 0,
                                        paddingTop: 0,
                                        color: theme.palette.info.dark,
                                        fontWeight: 500,
                                    }}>
                                        Your Features, Your Vibes
                                    </Typography>
                                    <div style={{ height: '360px', width: '100%' }}>
                                        <DataGrid
                                            rows={rows}
                                            columns={columns}
                                            slots={{ toolbar: GridToolbar }}
                                            hideFooter={true}
                                            density='compact'
                                            columnVisibilityModel={columnVisibilityModel}
                                            onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
                                        />
                                    </div>
                                </CardContent>
                            </Typography>
                        </Item>
                    </Grid>

                    <Grid item xs={12} className='just-a-vibe' sx={{ boxShadow: ["none"] }}>
                        <Item className='just-a-vibe'><Typography variant="h5" style={{ flexGrow: '6' }}>😎 now that’s a vibe 😎</Typography>
                        </Item>
                    </Grid>

                </Grid>
            </Container >
        </PageLayout>
    );
};

export default Features;