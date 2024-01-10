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
                    body1: 'span1',
                    body2: 'span2',
                },
            },
        },
    },
});

export default theme;
