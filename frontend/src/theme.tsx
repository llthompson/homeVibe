// frontend/src/theme.tsx
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#00c197',
        },
        secondary: {
            main: '#fe3e93',
        },
        error: {
            main: '#b2001e',
        },
        warning: {
            main: '#002ac1',
        },
        info: {
            main: '#a700c7',
        },
        success: {
            main: '#008ac1',
        },
    },
    typography: {
        fontFamily: 'Quicksand, sans-serif',
    },
});

export default theme;
