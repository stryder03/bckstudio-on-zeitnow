import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Head from "next/head";
import {clp_exclaim, container, playBrand, title} from "../assets/jss/nextjs-material-kit";
import Layout from "../pages-sections/Page-Sections/Layout";
import MainContent from "../components/MainContent/MainContent";
import Typography from "@material-ui/core/Typography";

const style = theme => ({
    clp_exclaim,
    title,
    playBrand,
    container: {
        ...container,
        marginTop: "2rem",
        minHeight: "10rem"
    }
});
const useStyles = makeStyles(style);

export default function ConfirmationPage(props) {
    const classes = useStyles();

    return (
        <div>
            <Head>
                <meta name="robots" content="noindex"/>
                <title>Confirmation • Bozeman Community Kiln</title>
            </Head>
            <div>
                <Layout noParallax={true}>
                    <MainContent>
                        THANK <span className={classes.playBrand}>YOU</span><span className={classes.clp_exclaim}>!</span>
                    </MainContent>
                    <div className={classes.container}>
                        <Typography variant={"h5"} align={"center"} justify={"center"} className={classes.title}>
                            Your membership is being processed.
                        </Typography>
                        <Typography variant={"body1"} align={"center"} justify={"center"}>
                            You will receive an email shortly with the agreement documents to sign electronically. Also, there will be a link to schedule your Orientation session.
                        </Typography>
                        <Typography variant={"h6"} align={"center"} justify={"center"} className={classes.title}>
                            Welcome to the Bozeman Community Kiln Community!
                        </Typography>
                    </div>
                </Layout>
            </div>
        </div>
    )
}
