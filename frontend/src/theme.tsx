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
    },
    typography: {
            fontFamily: 'Quicksand, sans-serif',
    },
});

export default theme;
