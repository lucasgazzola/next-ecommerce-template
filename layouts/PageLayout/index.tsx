import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "redux/store";

import type { LayoutProps } from "types/pageWithLayouts";

import { ProductsContextProvider } from "context/Products";
import { Header, Footer } from "components";

import style from "./PageLayout.module.css";

// type Props = {
//   children: React.ReactNode;
//   title: string;
// };

const PageLayout: LayoutProps = ({ children }) => {
  return (
    <Provider store={store}>
      <div className={style.pageLayout}>
        <Head>
          <title>Ecommerce</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Header />
        <ProductsContextProvider>
          <main className={style.mainContent}>{children}</main>
        </ProductsContextProvider>
        <Footer />
      </div>
    </Provider>
  );
};

export default PageLayout;
