import {container, title} from "../../nextjs-material-kit";
import theme from "../../../theme";

const socialMediaStyle = {

    container: {
        zIndex: "12",
        color: "#FFFFFF",
        textAlign: "center",
        ...container
    },
    title: {
        ...title,
        display: "inline-block",
        position: "relative",
        color: "#FFFFFF",
        fontWeight: "bold",
        fontFamily: 'Asap, sans-serif',
        textShadow: "2px 2px 4px #000000",
        [theme.breakpoints.up('md')]: {
            marginTop: "10%"
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: "30%"
        }
    },
    icon: {
        boxShadow: "0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19)",
        borderRadius: "10px",
        width: "40px",
        backgroundColor: "white"

    },
};

export default socialMediaStyle;
