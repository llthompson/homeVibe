// frontend/src/components/Stepper.tsx

import { useEffect, useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Card, CardMedia, Typography, CardContent, Button } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { DataGrid, GridApi, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import HeartBrokenOutlinedIcon from '@mui/icons-material/HeartBrokenOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/system';
import Paper from '@mui/material/Paper';
import { useAuth0 } from "@auth0/auth0-react";
import * as apiService from '../services/Api'
import CreateFeatureDialog from './CreateFeature';


const steps = ['Select standard home features', 'Select advanced home features', 'Create your own custom features'];

export default function HorizontalLinearStepper() {
    const theme = useTheme();
    const [features, setFeatures] = useState([])
    const { getAccessTokenSilently } = useAuth0();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());

    const isStepOptional = (step: number) => {
        return step === 1;
    };

    const isStepSkipped = (step: number) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    useEffect(() => {
        async function getCenter() {
            try {
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
        { field: 'feature', headerName: 'Feature', width: 200, sortable: false },
        { field: 'type', headerName: 'Type', width: 130, sortable: false },
        {
            field: 'SAVE', headerName: 'Save', align: 'center', sortable: false,
            renderCell: (params) => {
                const onClick = (e: any) => {
                    e.stopPropagation();
                    // console.log('paramsss', params.row)
                };

                return <Button onClick={onClick}><HeartBrokenOutlinedIcon color="info"></HeartBrokenOutlinedIcon></Button>;
            }
        },
    ];

    const rows = features.map((item: any) => ({ id: item.id, feature: item.feature, __check__: false, type: item.type }));


    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: React.ReactNode;
                    } = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography variant="caption">Optional</Typography>
                        );
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

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

            {activeStep === 2 && (

                <Card className='step3-custom' >

                    <CardContent className='add-custom-feature' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <CreateFeatureDialog></CreateFeatureDialog>
                    </CardContent>

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

                // Back and skip buttons
                <React.Fragment>
                    {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
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
                        {isStepOptional(activeStep) && (
                            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                Skip
                            </Button>
                        )}
                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}