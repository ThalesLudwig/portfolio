import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store, { persistor } from "../config/store";
import ConnectedTheme from "../components/ConnectedTheme/ConnectedTheme";
import { initialize } from "chat-moduler";
import { useEffect } from "react";
import { enUSExpressions, ptBRExpressions, Recruiter } from "../config/chatModule";
import IntlProvider from "../components/IntlProvider";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initialize(
      [
        {
          name: "recruiter",
          expressions: {
            "en-US": enUSExpressions,
            "pt-BR": ptBRExpressions,
          },
          module: Recruiter,
        },
      ],
      ["en-US", "pt-BR"],
    );
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ConnectedTheme>
          <IntlProvider>
            <Head>
              <title>Thales Ludwig</title>
              <meta name="description" content="Thales Ludwig's Website" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Component {...pageProps} />
            </div>
          </IntlProvider>
        </ConnectedTheme>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
