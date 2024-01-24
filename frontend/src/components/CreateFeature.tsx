// frontend/src/components/CreateFeature.tsx

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Typography, CardContent, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useAuth0 } from "@auth0/auth0-react";
import useStore from '../state';


export default function CreateFeatureForm() {
    const { getAccessTokenSilently } = useAuth0();
    const [userFeature, setUserFeature] = useState('')

    return (
        <React.Fragment>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, display: 'flex', },
                }}
                noValidate>
                <CardContent className='card-to-create-custom-feature'
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        margin: '0',
                    }}>
                    <Typography
                        variant="h6"
                        gutterBottom>
                        <TextField className='custom-feature-text-field'
                            id="outlined-helperText"
                            label="Your Custom Feature"
                            defaultValue=""
                            helperText=""
                            value={userFeature}
                            onChange={(event) => {
                                setUserFeature(event.target.value)
                            }
                            }
                            sx={{
                                width: '700px'
                            }}
                        />
                    </Typography>
                    <Button className='custom-feature-submit-button'
                        size="medium"
                        variant="contained"
                        color="secondary"
                        sx={{
                            display: 'flex'
                        }}
                        type="submit"
                        onClick={
                            async (e) => {
                                e.preventDefault()
                                const accessToken = await getAccessTokenSilently();
                                useStore.getState().addFeature(userFeature, accessToken)
                                setUserFeature('')
                            }
                        }
                    >
                        <Typography
                            style={{
                                fontSize: '18px',
                                marginBottom: 0,
                                whiteSpace: 'nowrap'
                            }}>
                            Submit
                        </Typography>
                    </Button>
                </CardContent>
            </Box>
        </React.Fragment>
    );
}