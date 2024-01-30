// frontend/src/components/Stepper.tsx

import { useEffect } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import { Card, Typography, CardContent, Button, useMediaQuery } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { styled } from '@mui/material/styles';
import { Theme, useTheme } from '@mui/system';
import { useAuth0 } from "@auth0/auth0-react";
import * as apiService from '../services/Api'
import CreateFeatureDialog from './CreateFeature';
import useStore, { Feature } from '../state';
import { useShallow } from 'zustand/react/shallow'
import { Link } from 'react-router-dom';


// FUTURE.ENHANCEMENTS UI could be improved, especially on mobile

const steps = ['standard home features', 'advanced home features', 'custom home features'];

export default function HorizontalLinearStepper() {
    const theme = useTheme();
    const { getAccessTokenSilently } = useAuth0();
    const [hover, setHover] = React.useState<{ [id: number]: number | null }>({});
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed] = React.useState<{
        [k: number]: boolean;
    }>({});

    const totalSteps = () => {
        return steps.length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const handleNext = () => {
        if (isLastStep()) {
            handleComplete()
        } else {
            setActiveStep(activeStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {

    };

    // Rating icon color
    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#ff6d75',
        },
        '& .MuiRating-iconHover': {
            color: '#ff3d47',
        },
    });

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
    const features = useStore(useShallow(state => state.features))
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
        { field: 'id', headerName: 'ID', flex: .05, align: 'left', sortable: true, },
        { field: 'feature', headerName: 'Feature', flex: .25, sortable: true },
        { field: 'type', headerName: 'Type', flex: .15, sortable: false },
        {
            field: 'rating', headerName: 'Rating', flex: .55, sortable: true,
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
                    <Box className='change-box-display-on-small-screen'
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
                            getLabelText={() => {
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
        <Box sx={{ width: '100%' }}>

            {/* Stepper Logic */}
            <Stepper nonLinear={true} activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => {

                    return (
                        <Step key={label} completed={completed[index]}>
                            <StepButton color="inherit" onClick={handleStep(index)}>
                                {label}
                            </StepButton>
                        </Step>
                    );
                })}
            </Stepper>

            {/* Step 1 Standard Features */}
            {activeStep === 0 && (
                <Card className='step1-standard' >
                    <CardContent>

                        <Typography variant="h6" style={{
                            fontSize: '24px',
                            marginBottom: 0,
                            paddingTop: 0,
                            color: theme.palette.info.dark,
                            fontWeight: 500,
                        }}>
                            Step {activeStep + 1}: Rate Standard Features
                        </Typography>

                        <div style={{ height: '360px', width: '100%' }}>
                            <DataGrid
                                rows={rows.filter(r => r.type === 'STANDARD')}
                                columns={columns}
                                checkboxSelection={false}
                                hideFooter={true}
                                density='compact'
                                columnVisibilityModel={columnVisibilityModel}
                                onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
                            />
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Step 2 Advanced Features */}
            {activeStep === 1 && (
                <Card className='step2-advanced' >
                    <CardContent>
                        <Typography variant="h6" style={{
                            fontSize: '24px',
                            marginBottom: 0,
                            paddingTop: 0,
                            color: theme.palette.info.dark,
                            fontWeight: 500,
                        }}>
                            Step {activeStep + 1}: Rate Advanced Features
                        </Typography>
                        <div style={{ height: '360px', width: '100%' }}>
                            <DataGrid
                                rows={rows.filter(r => r.type === 'ADVANCED')}
                                columns={columns}
                                checkboxSelection={false}
                                autoPageSize={false}
                                hideFooter={true}
                                density='compact'
                                columnVisibilityModel={columnVisibilityModel}
                                onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
                            />
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Step 3 Custom Features */}
            {activeStep === 2 && (
                <Card className='step3-custom' >
                    <CardContent>
                        <Typography variant="h6" style={{
                            fontSize: '24px',
                            marginBottom: 0,
                            paddingTop: 0,
                            color: theme.palette.info.dark,
                            fontWeight: 500,
                        }}>
                            Step {activeStep + 1}: Create Custom Features
                        </Typography>

                        {/* Form to create Custom Features will come from CreateFeatureDialog */}
                        <CreateFeatureDialog></CreateFeatureDialog>

                        {/* Created Custom Features List/Grid */}
                        <Typography variant="h6" style={{
                            fontSize: '18px',
                            marginBottom: 0,
                            paddingTop: 0,
                            color: theme.palette.info.dark,
                            fontWeight: 500,
                        }}>
                            Rate Your Custom Features
                        </Typography>

                        <div style={{ height: 260, width: '100%' }}>
                            <DataGrid
                                rows={rows.filter(r => r.type === 'CUSTOM')}
                                columns={columns}
                                checkboxSelection={false}
                                hideFooter={true}
                                density='compact'
                                columnVisibilityModel={columnVisibilityModel}
                                onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
                            />
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Setup step nav */}
            {activeStep === steps.length ? (
                <React.Fragment>
                </React.Fragment>
            ) : (

                // Back button, set Step #, Finish button, Next button
                <React.Fragment>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, paddingTop: 0 }}>
                        <Button className='back-button-logic'
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            <Typography
                                style={{
                                    fontSize: '18px',
                                    marginBottom: 0,
                                    paddingTop: 0,
                                    color: theme.palette.info.dark,
                                    fontWeight: 700,
                                }}>
                                Back
                            </Typography>
                        </Button>

                        {/* Set Step # */}
                        <Box sx={{ flex: '1 1 auto' }} />
                        {activeStep === steps.length - 1 ? (

                            <Button className='finish-button-logic'
                                sx={{ display: 'flex' }}
                                variant="contained"
                                color="secondary"
                            >
                                <Link
                                    to="/Features"
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
                                        Finish
                                    </Typography>
                                </Link>
                            </Button>

                        ) : (
                            <Button className='next-button-logic'
                                onClick={handleNext}>
                                <Typography
                                    style={{
                                        fontSize: '18px',
                                        marginBottom: 0,
                                        paddingTop: 0,
                                        color: theme.palette.info.dark,
                                        fontWeight: 700,
                                    }}>
                                    Next
                                </Typography>
                            </Button>
                        )}
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}