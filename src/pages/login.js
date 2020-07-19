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
import CustomButtons from "../components/CustomButtons/Button";

const useStyles = makeStyles((theme) => ({
    brandFont,
    container: {
        ...container,
        marginTop: "2.5rem",
        paddingBottom: "2.5rem"
    },
    bookButton: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        marginLeft: "1rem",
        marginTop: "0",
        [theme.breakpoints.down("md")]: {
            marginTop: "auto"
        },
    }
}));

export default function login() {
    const classes = useStyles();

    return (
        <React.Fragment>
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
                <div className={classNames(classes.main_content, classes.mainContentRaised, classes.container)}>
                    <CustomButtons onClick={() => {}}
                                   className={classNames(classes.bookButton)}
                    >Log In</CustomButtons>
                </div>
            </Layout>
        </React.Fragment>
    );
}
