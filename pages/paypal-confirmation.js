import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Head from "next/head";
import {brandFont, clp_exclaim, container, playBrand, title} from "../assets/jss/nextjs-material-kit";
import Layout from "../pages-sections/Page-Sections/Layout";
import BrandedHeader from "../components/BrandedHeader/BrandedHeader";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";

const style = ({
    clp_exclaim,
    title,
    playBrand,
    container: {
        ...container,
        marginTop: "2rem",
        minHeight: "30rem",

    },
    brandFont,
});
const useStyles = makeStyles(style);

export default function ConfirmationPage() {
    const classes = useStyles();

    return (
        <div>
            <Head>
                <meta name="robots" content="noindex"/>
                <title>Confirmation • Bozeman Community Kiln</title>
            </Head>
            <div>
                <Layout>
                    <BrandedHeader>
                        <Typography variant={"h1"} className={classNames(classes.brandFont)} gutterBottom>
                            THANK<span className={classes.playBrand}> YOU</span><span className={classes.clp_exclaim}>!</span>
                        </Typography>
                    </BrandedHeader>
                    <div className={classes.container}>
                        <Typography variant={"h5"} align={"center"} justify={"center"} className={classes.title}>
                            Your membership is being processed.
                        </Typography>
                        <Typography variant={"body1"} align={"center"} justify={"center"}>
                            You will receive an email shortly with the agreement documents to sign electronically.
                            Also, there will be a link to schedule your Orientation session.
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
