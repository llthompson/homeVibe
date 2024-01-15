import { Card, CardMedia, Typography, CardContent, Button } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/system';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Link } from 'react-router-dom';
import { PageLayout } from './Page-Layout';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const LearnMore = () => {
    const theme = useTheme();

    return (
        <PageLayout>
            <Container>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                    <Grid item xs={12} className='page-header'>
                        <Card sx={{ maxHeight: 150, boxShadow: ["none"] }}>
                            <CardMedia
                                component="img"
                                style={{ transform: 'scale(0.75)' }}
                                image="../../learn-more-logo2.png"
                                alt="page-header-learn-more"
                            />
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
                            <CardContent className='empty box 2 content' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', whiteSpace: "pre-wrap" }}>
                                <Typography component="div" variant="h5">
                                    blank
                                    {'\n'}
                                    content #2
                                </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid item xs={6} className='third empty box'>
                        <Card sx={{
                            display: 'flex',
                            margin: "0 auto",
                            padding: "0.1em",
                        }}>

                            <CardContent className='empty box 3 content'
                                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', whiteSpace: "pre-wrap" }}>
                                <Typography component="div" variant="body1" sx={{ alignItems: 'center', wordBreak: "break-word", textAlign: 'center' }}>
                                    Yo, congrats on ditching the shoebox apartment and diving headfirst into adulthood! Buying a house? That's some next-level grown-up flex, fam.
                                    <br />
                                    <br />
                                    But real talk? Finding the perfect pad is stressful AF. This ain't just picking a new phone case. This is your freakin' crib, your sanctuary, your castle built on avocado toast dreams.
                                    <br />
                                    <br />
                                    Here's the lowdown: you gotta figure out what floats your boat when it comes to homes. Like, is a backyard where your doggo can do Zoomies a must? Or are you all about that open-plan slay with a kitchen so lit you'll be the TikTok queen of baking?
                                    <br />
                                    <br />
                                    That's where HomeVibe comes in, your personal home-buying bestie. Ditch the spreadsheets and endless Pinterest boards, HomeVibe helps you figure out what truly matters to you.
                                    <br />
                                    <br />
                                    Rate features like rooftop decks, hidden bookcases, and dreamy bathtubs – it's like picking your fave filters on Insta, but for your future crib.
                                    <br />
                                    <br />
                                    Boom! Now you've got a crystal-clear vision of your perfect pad, and the confidence to navigate the housing jungle like a total pro. No more FOMO, no more settling, just pure home-buying bliss. ✨
                                    <br />
                                    <br />
                                    So, what are you waiting for?
                                    <br />
                                    Create an account, slay the housing market, and get ready to throw the sickest housewarming party ever.
                                    <br />
                                    <br />
                                    #adultingmadeeasy


                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6} className='fourth empty box'>
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
        </PageLayout>
    );
};

export default LearnMore;