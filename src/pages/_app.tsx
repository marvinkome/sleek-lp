import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import React, { useEffect } from "react";
import ReactGA from "react-ga";
import theme from "theme";

const LayoutDefault = ({ children }: any) => <>{children}</>;

function SleekApp({ Component, pageProps }: any) {
  const router = useRouter();
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGA.initialize("UA-221381314-1");
    }

    const handleRouteChange = (url: string) => {
      ReactGA.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Layout = Component.Layout || LayoutDefault;

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Sleek | Crypto payment processing for the internet</title>
        <meta name="description" content="The new standard in crypto payment for everyone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default SleekApp;
