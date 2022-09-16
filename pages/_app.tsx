import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { PageLayout } from "layouts";
import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <PageLayout title="Home / App">
        <Component {...pageProps} />
      </PageLayout>
    );
  }
}

export default MyApp;
