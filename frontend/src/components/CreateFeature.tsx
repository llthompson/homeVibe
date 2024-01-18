// frontend/src/components/CreateFeature.tsx

import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Card, Typography, CardContent, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as api from '../services/Api'
import { useAuth0 } from "@auth0/auth0-react";


export default function CreateFeatureDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { getAccessTokenSilently } = useAuth0();

    return (
        <React.Fragment>
            <Card
                sx={{
                    minWidth: '100%'
                }}>

                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, display: 'flex', },
                    }}
                    noValidate>
                    <CardContent
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}>
                        <Typography
                            variant="h6"
                            gutterBottom>
                            <TextField
                                id="outlined-helperText"
                                label="Your Custom Feature"
                                defaultValue=""
                                helperText=""
                                sx={{
                                    width: '700px'
                                }}
                            />
                            <TextField
                                id="outlined-helperText"
                                label="Your Custom Feature"
                                defaultValue=""
                                helperText=""
                                sx={{
                                    width: '700px'
                                }}
                            />
                            <TextField
                                id="outlined-helperText"
                                label="Your Custom Feature"
                                defaultValue=""
                                helperText=""
                                sx={{
                                    width: '700px'
                                }}
                            />
                        </Typography>
                        <Button
                            className='custom-feature-submit-button'
                            size="medium"
                            variant="contained"
                            color="secondary"
                            sx={{
                                display: 'flex'
                            }}
                            type="submit"
                        // onClick={ }
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
            </Card>


            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: async (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries((formData as any).entries());
                        const accessToken = await getAccessTokenSilently();
                        const feature = await api.createUserFeature(accessToken, formJson)
                        handleClose();
                    },
                }}
            >
                <DialogTitle>Create a Custom Home Feature</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        What very specific home feature do you just HAVE to have???
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="feature"
                        label="What feature would you like?"
                        type="string"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button
                        type="submit">
                        Add Custom Feature
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}