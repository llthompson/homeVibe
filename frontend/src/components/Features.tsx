import { Card, CardMedia, Typography, CardContent } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/system';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Link } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Features = () => {
    const theme = useTheme();

    return (
        <Container >

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                <Grid item xs={12} className='empty card'>
                    <Card>
                        <Typography variant="h1" style={{ flexGrow: '1', fontFamily: 'Galada, cursive', textAlign: 'center', paddingTop: '30px' }}>
                            Features
                        </Typography>
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
                <Grid item xs={12} className='first empty box'>
                    <Card sx={{
                        display: 'flex',
                        margin: "0 auto",
                        padding: "0.1em",
                    }}>
                        empty card
                        <CardContent className='empty box 1 content' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography component="div" variant="h5">
                                blank content #1
                            </Typography>
                        </CardContent>
                    </Card>
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
                        <Fab variant="extended" color="info">
                            <NavigationIcon sx={{ mr: 1 }} />
                            <Typography variant="h4" style={{ flexGrow: '6' }}>
                                BIG BUTTON
                            </Typography>
                        </Fab>
                    </Item>
                </Grid>

            </Grid>

        </Container>
    );
};

export default Features;