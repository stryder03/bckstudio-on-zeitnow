/*
 * Copyright (c) 2020. Bozeman Community Kiln
 */

import React, {useEffect} from "react";
import Router from "next/router";
import ReactDOM from "react-dom";
import Head from "next/head";
import "../assets/scss/nextjs-material-kit.scss?v=1.0.0";
import {ThemeProvider} from "@material-ui/styles";
import theme from "../assets/theme";
import PageChange from "../components/PageChange/PageChange";
import {ParallaxProvider} from "react-scroll-parallax/cjs";
import * as Sentry from "@sentry/node";
import {useUser} from "../utils/auth/useUser";
import {BckAppProps} from "../index";
import {initGA, logPageView} from "src/utils/analytics/analytics"

if (process.env.NODE_ENV === "production") {
    Sentry.init({dsn: process.env.NEXT_PUBLIC_SENTRY_DSN});
}

Router.events.on("routeChangeStart", (url) => {
    document.body.classList.add("body-page-transition");
    ReactDOM.render(
        <PageChange path={url} />,
        document.getElementById("page-transition")
    );
});

Router.events.on("routeChangeComplete", () => {
    // @ts-ignore
    ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
    document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
    // @ts-ignore
    ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
    document.body.classList.remove("body-page-transition");
});

const usePageTracking = (userId: string | undefined) => {
    useEffect(() => {
        initGA(userId);
    }, []);

    useEffect(() => {
        logPageView()
    }, []);
}

export default function App(props: BckAppProps) {
    const { Component, pageProps, err } = props;
    const {user, logout} = useUser();

    // @ts-ignore
    usePageTracking(user.id)

    return (
      <React.Fragment>
          <Head>
              <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8"/>
              <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
              />
              <title>Bozeman Community Kiln • BCKstudio.com</title>
              <link href="https://fonts.googleapis.com/css2?family=Asap:wght@600;700&family=Lato:ital,wght@0,400;0,700;1,400&family=Merriweather+Sans:wght@800&display=swap" rel="stylesheet"/>
          </Head>
          <ThemeProvider theme={theme}>
              <ParallaxProvider>
                  <Component {...pageProps} err={err} user={user} logout={{logout}}/>
              </ParallaxProvider>
          </ThemeProvider>
      </React.Fragment>
    );
}
