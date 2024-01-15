// frontend/src/components/Stepper.tsx

import { useEffect, useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepButton from '@mui/material/StepButton';
import { Card, CardMedia, Typography, CardContent, Button } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { DataGrid, GridApi, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import HeartBrokenOutlinedIcon from '@mui/icons-material/HeartBrokenOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/system';
import Paper from '@mui/material/Paper';
import { useAuth0 } from "@auth0/auth0-react";
import * as apiService from '../services/Api'
import CreateFeatureDialog from './CreateFeature';
import TextField from '@mui/material/TextField';


const steps = ['Select standard home features', 'Select advanced home features', 'Create your own custom features'];

export default function HorizontalLinearStepper() {
    const theme = useTheme();
    const [features, setFeatures] = useState([])
    const { getAccessTokenSilently } = useAuth0();
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState<{
        [k: number]: boolean;
    }>({});

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#ff6d75',
        },
        '& .MuiRating-iconHover': {
            color: '#ff3d47',
        },
    });

    const labels: { [index: string]: string } = {
        0: '',
        1: 'Not Essential',
        2: 'Nice Bonus',
        3: 'Fairly Important',
        4: 'Very Desirable',
        5: 'Non-Negotiable'
    }

    const [value, setValue] = React.useState<number | null>(2);
    const [hover, setHover] = React.useState(-1);
    const [ratings, setRatings] = React.useState<{ [id: number]: number | null }>({});

    // Get features for user
    useEffect(() => {
        async function getFeatures() {
            try {
                const accessToken = await getAccessTokenSilently();

                let features: any = await apiService.getUserFeatures(accessToken)
                setFeatures(features);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        getFeatures();
    }, []);

    // Feature List/Grid
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70, align: 'left', sortable: false },
        { field: 'feature', headerName: 'Feature', width: 200, sortable: false },
        { field: 'type', headerName: 'Type', width: 130, sortable: false },
        // {
        //     field: 'SAVE', headerName: 'Save', align: 'center', sortable: false,
        //     renderCell: (params) => {
        //         const onClick = (e: any) => {
        //             e.stopPropagation();
        //             // console.log('paramsss', params.row)
        //         };

        //         return <Button onClick={onClick}><HeartBrokenOutlinedIcon color="secondary"></HeartBrokenOutlinedIcon></Button>;
        //     }
        // },
        {
            field: 'featureRatings', headerName: 'Rating', width: 430, sortable: false,
            renderCell: (params) => {
                const id = params.row.id;
                const rating = ratings[id] || 0;
                return (
                    <Box
                        sx={{
                            width: 200,
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        onMouseEnter={() => {
                            // console.log('Mouse entered row:', id);
                            setHover(id);
                        }}
                        onMouseLeave={() => {
                            // console.log('Mouse left row:', id);
                            setHover(-1);
                        }}
                    >
                        <StyledRating
                            name={`rating-${id}`}
                            color="secondary"
                            value={ratings[id]}
                            defaultValue={0}
                            getLabelText={(value: number) => {
                                console.log('getLabelText value ', value)
                                if (hover !== -1) {
                                    console.log('set label hover', hover)

                                    return (
                                        `${hover} Heart${hover !== 1 ? "s" : ""}, ${labels[id]} `

                                    );
                                }
                                // if (rating !== 0) {
                                //     return `${value} Heart${value !== 1 ? "s" : ""}, ${labels[rating]} `;
                                // }
                                return '';
                            }}

                            onChange={(event, newValue) => {
                                setRatings((prevRatings) => ({
                                    ...prevRatings,
                                    [id]: newValue,
                                }));
                            }}
                            onChangeActive={(event, newHover) => {
                                setHover(newHover);
                            }}
                            precision={1}
                            icon={<FavoriteIcon fontSize="inherit" color='secondary' />}
                            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}

                        />
                        {hover && (
                            <Box sx={{ ml: 2 }}>
                                {labels[hover]}
                            </Box>
                        )}
                    </Box>
                )
            }
        },
    ];
    const rows = features.map((item: any) => ({ id: item.id, feature: item.feature, __check__: false, type: item.type }));


    return (
        <Box sx={{ width: '100%' }}>
            {/* Stepper Logic */}
            <Stepper nonLinear activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: React.ReactNode;
                    } = {};

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
                        <Typography variant="h6" gutterBottom>
                            Choose Standard Features
                        </Typography>
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={rows.filter(r => r.type === 'STANDARD')}
                                columns={columns}
                                checkboxSelection={false}
                            />
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Step 2 Advanced Features */}
            {activeStep === 1 && (
                <Card className='step2-advanced' >
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Choose Advanced Features
                        </Typography>
                        <div style={{ height: 800, width: '100%' }}>
                            <DataGrid
                                rows={rows.filter(r => r.type === 'ADVANCED')}
                                columns={columns}
                                checkboxSelection={false}
                            />
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Step 3 Custom Features */}
            {activeStep === 2 && (
                <Card className='step3-custom' >

                    {/* Custom Feature Button */}
                    <CardContent className='add-custom-feature' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        {/* <CreateFeatureDialog></CreateFeatureDialog> */}
                    </CardContent>

                    {/* Custom Feature Form */}
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '50%', display: 'flex', },
                        }}
                        noValidate>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    <TextField
                                        id="outlined-helperText"
                                        label="Helper text"
                                        defaultValue="Default Value"
                                        helperText="Some important text"
                                    />
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>

                    {/* Created Custom Features List/Grid */}
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Your Custom Features    <Typography variant="caption" gutterBottom>
                                Click the button above to make your first custom feature!
                            </Typography>
                        </Typography>

                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={rows.filter(r => r.type === 'CUSTOM')}
                                columns={columns}
                                checkboxSelection={false}
                            />
                        </div>
                    </CardContent>

                </Card>
            )}

            {/* PUT LOGIC IN FOR RETURN PAGE AND NOT RESET */}
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (

                // Back and Next buttons
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>

                        <Box sx={{ flex: '1 1 auto' }} />

                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}