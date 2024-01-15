

import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Fab from '@mui/material/Fab';
import { Typography } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { useTheme } from '@mui/system';
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
            <Fab variant="extended" size='small' color="info" onClick={handleClickOpen}>
                <Typography variant="h5" style={{ flexGrow: '6' }}>
                    Create Custom Feature
                </Typography>
            </Fab>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: async (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries((formData as any).entries());
                        console.log('jas', formJson)
                        // const email = formJson.email;
                        const accessToken = await getAccessTokenSilently();
                        const feature = await api.createUserFeature(accessToken, formJson)
                        console.log(feature);
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
                    {/* <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        label="Feature notes"
                        type="email"
                        fullWidth
                        variant="standard"
                    /> */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Add Custom Feature</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}