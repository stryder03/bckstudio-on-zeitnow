import React from "react";
import Document, {Head, Main, NextScript} from "next/document";
import {ServerStyleSheets} from "@material-ui/styles";
import favicon from "../assets/img/favicon.png"
import theme from "../assets/theme";
import {GA_TRACKING_ID} from '../Scripts/gtag'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
      <Head>
          <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
              dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
              }}
          />
          <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8"/>
          <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="shortcut icon" type="image/x-icon" href={favicon}/>
          <link
              rel="apple-touch-icon"
              sizes="76x76"
              href={require("../assets/img/apple-icon.png")}
          />
          <meta name="theme-color" content={theme.palette.primary.main} />
        </Head>
        <body>
          <div id="page-transition"/>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheets.collect(<App {...props} />),
      });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
