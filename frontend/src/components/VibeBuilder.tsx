// frontend/src/components/VibeBuilder.tsx

import { Card, CardMedia } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/system';
import Paper from '@mui/material/Paper';
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { PageLayout } from './Page-Layout';
import HorizontalLinearStepper from './Stepper';
import PageLogo from '../assets/builderlogo.png'

// FUTURE.ENHANCEMENTS on mobile, simplify stepper navigation

// mui setup
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const VibeBuilder = () => {
    const theme = useTheme();
    const { getAccessTokenSilently } = useAuth0();

    // User authentication
    useEffect(() => {
        let isMounted = true;
        const getMessage = async () => {
            const accessToken = await getAccessTokenSilently();
            if (!isMounted) {
                return;
            }
        };
        getMessage();

        return () => {
            isMounted = false;
        };
    }, [getAccessTokenSilently]);

    return (
        <PageLayout>
            <Container>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                    <Grid item xs={12} className='page-header'>
                        <Card sx={{ maxHeight: 150, boxShadow: ["none"] }}>
                            <CardMedia
                                component="img"
                                style={{ transform: 'scale(0.75)' }}
                                image={PageLogo}
                                alt="page-header-VibeBuilder"
                            />
                        </Card>
                    </Grid>

                    <Grid item xs={12} className='stepper-feature'>
                        <HorizontalLinearStepper></HorizontalLinearStepper>
                    </Grid>

                </Grid>
            </Container>
        </PageLayout>
    );
};

export default VibeBuilder;