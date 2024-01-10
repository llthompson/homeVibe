import { Card, CardMedia, Typography, CardContent } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/system';



const Dashboard = () => {
    const theme = useTheme();

    return (
        <Container>
            I'm a dashboard!
        </Container>
    );
};

export default Dashboard;