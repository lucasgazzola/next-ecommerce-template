import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "redux/store";

import { ProductsContextProvider } from "context/Products";
import { Header, Footer } from "components";

import style from "./PageLayout.module.css";

type Props = {
  children: React.ReactNode;
  title: string;
};

function PageLayout({ children, title = "Home" }: Props) {
  return (
    <Provider store={store}>
      <div className={style.pageLayout}>
        <Head>
          <title>{title}</title>
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
}

export default PageLayout;
