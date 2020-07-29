import React from "react";
import App from "next/app";
import Router from "next/router";
import ReactDOM from "react-dom";
import Head from "next/head";
import "../assets/scss/nextjs-material-kit.scss?v=1.0.0";
import {ThemeProvider} from "@material-ui/styles";
import theme from "../assets/theme";
import PageChange from "../components/PageChange/PageChange";
import {ParallaxProvider} from "react-scroll-parallax/cjs";
import * as Sentry from "@sentry/react";

if (process.env.VERCEL_GITHUB_COMMIT_SHA) {
    Sentry.init({dsn: process.env.NEXT_PUBLIC_SENTRY_DSN, release: process.env.VERCEL_GITHUB_COMMIT_SHA,
        enabled: process.env.NODE_ENV === "production" || process.env.NODE_ENV === "preview",});
}

Router.events.on("routeChangeStart", (url) => {
    document.body.classList.add("body-page-transition");
    ReactDOM.render(
        <PageChange path={url} />,
        document.getElementById("page-transition")
    );
});
Router.events.on("routeChangeComplete", () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
    document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
    document.body.classList.remove("body-page-transition");
});

export default class MyApp extends App {
  render() {
    const { Component, pageProps, err } = this.props;

    return (
      <React.Fragment>
          <Head>
              <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1, shrink-to-fit=no"
              />
              <title>Bozeman Community Kiln • BCKstudio.com</title>
              <link href="https://fonts.googleapis.com/css2?family=Asap:wght@600;700&family=Lato:ital,wght@0,400;0,700;1,400&family=Merriweather+Sans:wght@800&display=swap" rel="stylesheet"/>
          </Head>
        <ThemeProvider theme={theme}>
            <ParallaxProvider>
                <Component {...pageProps} err={err}/>
            </ParallaxProvider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
