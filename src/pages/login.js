/*
 * Copyright (c) 2020. Bozeman Community Kiln
 */

import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Head from "next/head";
import {brandFont, container, title,} from "../assets/jss/nextjs-material-kit";
import Layout from "../pages-sections/Page-Sections/Layout";
import BrandedHeader from "../components/BrandedHeader/BrandedHeader";
import {Typography} from "@material-ui/core";
import classNames from "classnames";
import CustomButtons from "../components/CustomButtons/RegularButton";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    brandFont,
    container: {
        ...container,
        marginTop: "2.5rem",
        paddingBottom: "2.5rem",
    },
    loginButton: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        marginRight: "-2.5rem"
    }
}));

export default function login() {
    const classes = useStyles();
    const [infoText, setInfoText] = React.useState("")

    return (
        <div>
            <Head>
                <title>LOGIN • Bozeman Community Kiln</title>
                <meta name="description"
                      content="Login to the BCK App"/>
            </Head>
            <Layout>
                <BrandedHeader>
                    <Typography variant={"h1"} align={"center"} className={classNames(classes.brandFont)} gutterBottom>
                        Login to BCK
                    </Typography>
                </BrandedHeader>
                <Grid container justify="center" direction="column" alignItems={"center"} className={classes.container}>
                    <Grid item>
                        <Typography variant={"body2"}>
                            {infoText}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <CustomButtons onClick={() => setInfoText("This Feature will be available in the future. Check back soon!")}
                                       className={classNames(classes.loginButton)}
                        >Log In</CustomButtons>
                    </Grid>
                </Grid>
            </Layout>
        </div>
    );
}
