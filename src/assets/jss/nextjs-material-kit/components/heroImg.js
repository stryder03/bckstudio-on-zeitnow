import theme from "../../../theme";

const heroImgStyle = {
    container: {
        zIndex: "0",
        marginTop: "-4.375rem",
        position: "relative",
        backgroundPosition: "center top",
        backgroundSize: "100%",
        backgroundRepeat: " no-repeat",
        [theme.breakpoints.up("md")]: {
            minHeight: "450 px"
        },

    },
};

export default heroImgStyle;
