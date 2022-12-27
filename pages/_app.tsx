import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { StateContext } from ".././context/StateContext";
import NoSsr from "@mui/base/NoSsr";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <NoSsr>
      <StateContext>
        <Layout>
          <ChakraProvider>
            <Component {...pageProps} />
          </ChakraProvider>
        </Layout>
      </StateContext>
    </NoSsr>
  );
}
