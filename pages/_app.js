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

Router.events.on("routeChangeStart", url => {
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
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
          <Head>
              <title>Bozeman Community Kiln • BCKstudio.com</title>
              <link href="https://fonts.googleapis.com/css?family=Asap:600,700&display=swap|Lato&display=swap|Merriweather+Sans:800&display=swap" rel="stylesheet"/>
          </Head>
        <ThemeProvider theme={theme}>
            <ParallaxProvider>
                <Component {...pageProps} />
            </ParallaxProvider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
