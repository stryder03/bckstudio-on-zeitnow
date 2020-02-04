import React from "react";
// core components
import Head from "next/head";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import classNames from "classnames";
// Sections for this page


import {
    brandFont,
    mainElement,
    playBrand,
    primaryFontColor,
    secondaryColor,
    title
} from "../assets/jss/nextjs-material-kit";
import Layout from "../pages-sections/Page-Sections/Layout";
import MainContent from "../components/MainContent/MainContent";

const style = theme => ({
    h1Container: {
        backgroundColor: theme.palette.secondary.main,
        padding: "2.5rem",
    },
    textBody:{
        maxWidth: "50vw",
        margin: "auto"
    },

    column: {
        flexBasis: '33.33%',
    },
    panel: {
        maxWidth: "50%",
        margin: "auto"
    },
    grid: {
        backgroundColor: "fff"
    },
    playExclaim: {
        fontSize: "0.85em"
    },
    playBrand: {
        color: theme.palette.primary.main
    },
    main_content: {
        position: "relative",
        zIndex: "2"
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
    play_brand: {
        ...playBrand
    },
    clp_exclaim: {
        ...playBrand,
        fontSize: "0.85em"

    },
    section: {
        width: "100%",
        padding: "70px 0",
        textAlign: "center",
        backgroundColor: secondaryColor
    },
    title: {
        ...title,
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    description: {
        color: primaryFontColor
    },
    mainElement,

    brandFont
});
const useStyles = makeStyles(style);

export default function (props) {
    const classes = useStyles();
    const {} = props;
    return (
            <div>
                <Head>
                    <title>Clay Encounters • Bozeman Community Kiln</title>
                </Head>
                <Layout>
                    <MainContent>
                        <Typography variant={"h1"} align={"center"} className={classNames(classes.brandFont)} gutterBottom>
                            LEARN.<span className={classes.playBrand}> PLAY</span><span className={classNames(classes.playExclaim, classes.playBrand)}>!</span>
                        </Typography>
                        <div className={classes.textBody}>
                            <Typography variant={"body1"} component={"p"} align={"center"}>
                                Thank you for being interested in our Classes and Memberships! We want to make Ceramics/pottery/clay an affordable, entertaining past time for everyone. Here is a quick guide to help understand how our system works: Memberships keep us open and allow our members to have access to the studio and equipment. Classes, on the other hand, directly support local, working artists! During regular open studio hours, Ashleah and Heather are available to meet the individualized needs of members. For more advanced ceramicists and individuals that want access outside of these hours, we have memberships that grant access to facilities up to 24/7. After hours, Artists rent the entire studio to teach their own classes. Read on to find the option that speaks to you!                            </Typography>
                        </div>
                    </MainContent>
                </Layout>
            </div>
    );
}
