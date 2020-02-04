import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';
import {red} from '@material-ui/core/colors';

// Create a theme instance.
const themeBase = createMuiTheme({
    palette: {
        primary: {
            main: '#406d7f',
            light: '#6f9bae',
            dark: '#0e4253',
            contrastText: "#fff"
        },
        secondary: {
            main: '#bbdcdd',
            light: '#eeffff',
            dark: '#8baaab',
            contrastText: '#333'
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
    typography: {
        fontFamily: ['Lato','Helvetica','Arial','Lucida','sans-serif'].join(','),
        h1: {
            fontFamily: ['Asap', 'sans-serif'].join(','),
            fontWeight: "700",
            color: "#333"
        },
        h2:{
            fontFamily: ['Asap', 'sans-serif'].join(','),
            fontWeight: "700",
            color: "#333"
        },
        h3: {
            fontFamily: ['Asap', 'sans-serif'].join(','),
            fontWeight: "700",
            color: "#333"
        },
        h4: {
            fontFamily: ['Asap', 'sans-serif'].join(','),
            fontWeight: "700",
            color: "#333"
        },
        h5: {
            fontFamily: ['Asap', 'sans-serif'].join(','),
            fontWeight: "700",
            color: "#333"
        },
        h6: {
            fontFamily: ['Asap', 'sans-serif'].join(','),
            fontWeight: "700",
            color: "#333"
        },
    }
});

const theme = responsiveFontSizes(themeBase);
theme.typography.h1 = {
    fontSize: "3rem",
    [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
    },
    [theme.breakpoints.down('xs')]: {
    fontSize: '2rem',
},
};
export default theme;
