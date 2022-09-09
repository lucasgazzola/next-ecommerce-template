import Head from "next/head";
import { Footer, Header } from "components";
import { ProductsContextProvider } from "context/Products";
import style from "./PageLayout.module.css";

type Props = {
  children: React.ReactNode;
  title?: string;
};

function PageLayout({ children, title }: Props) {
  return (
    <div className={style.pageLayout}>
      <Head>
        <title>{title ? title : `Ecommerce Template - ${title}`}</title>
      </Head>
      <Header />
      <ProductsContextProvider>
        <main className={style.mainContent}>{children}</main>
      </ProductsContextProvider>
      <Footer />
    </div>
  );
}

export default PageLayout;
