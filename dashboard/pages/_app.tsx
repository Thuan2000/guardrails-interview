/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import "react-datetime/css/react-datetime.css";

import { getDataFromTree } from "@apollo/client/react/ssr";
import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import withApollo from "@lib/withApollo";

const NoLayout: React.FC<any> = ({ children }) => <>{children}</>;

function App(props: AppProps) {
  const { Component, pageProps } = props;
  const Layout =
    (Component as React.FunctionComponent & { Layout: React.FunctionComponent })
      .Layout ?? NoLayout;

  return (
    <>
      <Head>
        <title>[Thuan Nguyen]: Guardrails Interview Exercise</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </>
  );
}

export default withApollo(App, { getDataFromTree });
