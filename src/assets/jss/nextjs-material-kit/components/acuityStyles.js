import {container, mainElement, secondaryColor} from "../../nextjs-material-kit";

const acuityStyles = {
    container: {
        zIndex: "12",
        color: "#FFFFFF",
        textAlign: "center",
        ...container
    },
    main_content: {
        position: "relative",
        zIndex: "1000"
    },
    mainContentRaised: {
        margin: "auto",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        "@media (max-width: 830px)": {
            marginLeft: "auto",
            marginRight: "auto"
        }
    },
    section: {
        width: "100%",
        padding: "70px 0",
        textAlign: "center",
        backgroundColor: secondaryColor
    },
    mainElement,
};

export default acuityStyles;
