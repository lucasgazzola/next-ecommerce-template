import type { AppProps } from "next/app";
import { useEffect, useState, ReactElement } from "react";
import PageWithLayoutType from "types/pageWithLayouts";

import "styles/globals.css";

type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType;
  pageProps: any;
};

function MyApp({ Component, pageProps }: AppLayoutProps) {
  // Soluciona error que HTML no matchea al servidor
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);
  if (!showChild) {
    return null;
  }

  const Layout =
    Component.layout || ((children: ReactElement) => <>{children}</>);

  // const SubLayout =
  //   Component.subLayout && ((children: ReactElement) => <>{children}</>);

  return (
    <Layout>
      {/* <SubLayout> */}
      <Component {...pageProps} />
      {/* </SubLayout> */}
    </Layout>
  );
}

export default MyApp;
