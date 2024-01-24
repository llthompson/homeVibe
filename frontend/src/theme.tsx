// frontend/src/theme.tsx

import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 860,
            lg: 1080,
            xl: 1920,
        },
    },
    palette: {
        primary: {
            main: '#05a9ca',
            light: '#b3eaf8',
            dark: '#008196',
            contrastText: '#fff',
        },
        secondary: {
            main: '#fe3e93',
            light: '#fe7fb4',
            dark: '#d2005b',
            contrastText: '#fff',
        },
        error: {
            main: '#ff451b',
            light: '#ffa990',
            dark: '#ca2605',
            contrastText: '#fff',
        },
        warning: {
            main: '#114fd5',
            light: '#6e85e2',
            dark: '#001da0',
            contrastText: '#fff',
        },
        info: {
            main: '#ca05a9',
            light: '#e286cc',
            dark: '#8d008d',
            contrastText: '#fff',
        },
        success: {
            main: '#05ca88',
            light: '#bdecd5',
            dark: '#009d5a',
            contrastText: '#fff',
        },
    },
    typography: {
        fontFamily: 'Quicksand, sans-serif',
    },
    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h1',
                    h2: 'h2',
                    h3: 'h3',
                    h4: 'h4',
                    h5: 'h5',
                    h6: 'h6',
                    subtitle1: 'sub1',
                    subtitle2: 'sub2',
                    caption: 'caption',
                },
            },
            styleOverrides: {
                caption: {
                    fontSize: '8px'
                },
            },
        },
    },
});

export default theme;
