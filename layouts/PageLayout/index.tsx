import { Provider } from "react-redux";
import Head from "next/head";

import { Footer, Header } from "components";

import { store } from "redux/store";
import { ProductsContextProvider } from "context/Products";

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
          <title>{`${title} / EcommerceTemp`}</title>
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
