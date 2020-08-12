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
import {useUser} from 'src/utils/auth/useUser'
import PrimaryContainedButton from "../components/Buttons/PrimaryContainedButton";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(() => ({
    brandFont,
    container: {
        ...container,
        marginTop: "2.5rem",
        paddingBottom: "2.5rem",
    },
    center: {
        width: "10%",
        margin: "auto"
    },
    btnContainer: {
        marginTop: "2.5rem",
        paddingBottom: "2.5rem",
    }
}));

// const fetcher = (url, token) =>
//     fetch(url, {
//         method: 'GET',
//         headers: new Headers({ 'Content-Type': 'application/json', token }),
//         credentials: 'same-origin',
//     }).then((res) => res.json())

export default function login(props) {
    const classes = useStyles(props);
    const { user, logout } = useUser();

    const isUser = !user ?
        <React.Fragment>
            <div className={classNames(classes.btnContainer, classes.center)}>
                <PrimaryContainedButton href={'/auth'} center>
                    Log In
                </PrimaryContainedButton>
            </div>
        </React.Fragment>:
        <React.Fragment>
            <Typography variant={"body1"} align={"center"}>
                Username: {user.email}
            </Typography>
            <div className={classNames(classes.btnContainer, classes.center)}>
                <PrimaryContainedButton onClick={() => logout()}>
                    Log Out
                </PrimaryContainedButton>
            </div>
        </React.Fragment>

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
                <Container className={classes.container}>
                    {isUser}
                </Container>
            </Layout>
        </div>
    );
}
