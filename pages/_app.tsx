import "styles/globals.css";
import type { AppProps } from "next/app";
import { PageLayout } from "layouts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageLayout title="Home / App">
      <Component {...pageProps} />
    </PageLayout>
  );
}

export default MyApp;
