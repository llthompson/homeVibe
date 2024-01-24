// frontend/src/components/LearnMore.tsx

import { Card, CardMedia, Typography, CardContent, Button } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { display, useTheme } from '@mui/system';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Link } from 'react-router-dom';
import { PageLayout } from './Page-Layout';
import PageLogo from '../assets/learn-more-logo2.png'
import { useAuth0 } from "@auth0/auth0-react";


// FUTURE.ENHANCEMENTS conditionally render sign up button - change to "get started" and redirect to VibeBuilder when authenticated

// mui setup
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const LearnMore = () => {
    const theme = useTheme();
    const { loginWithRedirect } = useAuth0();

    return (
        <PageLayout >
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: ["none"] }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: ["none"] }} >

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

                    <Grid item xs={10} className='content tile' sx={{ boxShadow: ["none"], margin: '0', padding: '0' }}>
                        <Card className='learn-more-cards' sx={{ boxShadow: ["none"], margin: '0', padding: '0' }}>
                            <Item><Typography variant="h3" style={{ flexGrow: '1', margin: '0' }}>homeVibe:
                                <br></br>
                                the G.O.A.T. house hunting tool</Typography></Item>
                        </Card>
                    </Grid>


                    <Grid item xs={10} className='homeVibe-Learn-More' sx={{ boxShadow: ["none"] }} >
                        <Card sx={{
                            display: 'flex',
                            margin: "0 auto",
                            padding: "0.1em",
                            boxShadow: ["none"]
                        }}>
                            <CardContent className='homeVibe-Learn-More'
                                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', whiteSpace: "pre-wrap", margin: '0', boxShadow: ["none"] }}>
                                <Typography component="div" variant="h6" sx={{ alignItems: 'center', wordBreak: "break-word", textAlign: 'center' }}>
                                    Yo, congrats on ditching the shoebox apartment and diving headfirst into becoming a homeowner! 🏡 Buying a house? That's some next-level adulting, fam. 🙌But real talk? Finding the perfect pad is stressful AF. 😅 This ain't just picking a new phone case. This is your freakin' crib, your sanctuary, your castle built on avocado toast dreams. 🏰🥑
                                    <br />
                                    <br />
                                    Here's the lowdown: you gotta figure out what floats your boat 🚤 when it comes to your new pad. Like, is a backyard where your doggo 🐾 can do Zoomies a must? Or are you all about that open-plan lyfe with a kitchen so lit you'll be the TikTok queen of baking? 🍳
                                    <br />
                                    <br />
                                    That's where homeVibe comes in, your personal home-buying bestie. 🏡✨ Ditch the spreadsheets 📊 and endless Pinterest boards, homeVibe helps you figure out what truly matters to you. Rate features like rooftop decks 🌆, hidden bookcases 📚, and dreamy bathtubs 🛁 – it's like picking your fave filters on Insta, but for your future crib. 🌟
                                    <br />
                                    <br />
                                    Boom! Now you've got a crystal-clear vision of your perfect pad, and the confidence to navigate the housing jungle like a total pro. 🌳🏡 No more FOMO, no more settling, just pure home-buying bliss. ✨So, what are you waiting for?
                                    <br />
                                    Create an account, slay the housing market, and get ready to throw the sickest housewarming party ever. 🎉🏡
                                    <br />
                                    <br />
                                    #adultingmadeeasy 💼
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} className='sigup'>
                        <Item sx={{ boxShadow: 'none' }}><Typography variant="h3" style={{ flexGrow: '6' }}>sign up to start vibin'</Typography>
                            <Fab variant="extended" color="secondary" onClick={() => loginWithRedirect({
                                authorizationParams: {
                                    screen_hint: "signup"
                                }
                            })}>
                                <NavigationIcon sx={{ mr: 1 }} />
                                <Typography variant="h4" style={{ flexGrow: '6' }}>
                                    SIGN UP
                                </Typography>
                            </Fab>
                        </Item>
                    </Grid>

                    <Grid item xs={10} className='content tile' sx={{ boxShadow: ["none"], marginTop: 0, marginBottom: 0, padding: 0 }}>
                        <Card className='learn-more-cards' sx={{ boxShadow: ["none"] }}>
                            <Item><Typography variant="h4" style={{ flexGrow: '1', marginTop: '40px', marginBottom: 0, padding: 0 }}>
                                about the creator</Typography></Item>
                        </Card>
                    </Grid>

                    <Grid item xs={12} className='profile-link'>
                        <CardContent className='about-lisa-content' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 0 }}>
                            <Typography component="div" variant="body1" sx={{ alignItems: 'center', wordBreak: "break-word", textAlign: 'center' }}>
                                homeVibe is a fully original idea conceived by Lisa Thompson. The idea came to Lisa when she started her journey as a first-time homebuyer – while attending a full-stack engineering bootcamp and working a full-time job. Her hands were definitely full – and her brain was, too. It made it challenging to keep in mind everything she was hoping to find in a potential home, and trying to prioritize those wants and needs felt overwhelming. While there were some resources online to help with this task, they were low-key basic: barely going beyond the number of bedrooms or the type of flooring.
                                <br />
                                <br />
                                So when it came time to decide on her capstone project to graduate from bootcamp, she knew she had to make the tool she wished she had had – an in depth, fully customizable, home feature rating system to keep track of all the details homebuyers are searching for. And because Lisa can’t do anything without injecting a little flair and creativity, she decided to give it a gen-Z inspired brand identity. homeVibe takes the homebuying process from basic and cray cray to lit and bussin’.
                                <br />
                                <br />
                                To learn more about Lisa and her coding journey, check out <Link to="https://llthompson.github.io/myPortfolio/index.html" style={{ display: 'in-line' }}>
                                    <Typography component="div" variant="body1">
                                        her profile.
                                    </Typography>
                                </Link>
                            </Typography>
                        </CardContent>
                    </Grid>

                </Grid>
            </Container>
        </PageLayout>
    );
};

export default LearnMore;