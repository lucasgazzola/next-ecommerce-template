import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ProductsContextProvider } from "../context/Products";

type Props = {
  children: React.ReactNode;
  title?: string;
};

function PageLayout({ children, title }: Props) {
  return (
    <div>
      <Head>
        <title>{title ? title : "Ecommerce Template"}</title>
      </Head>
      <Header />
      <ProductsContextProvider>
        <main>{children}</main>
      </ProductsContextProvider>
      <Footer />
    </div>
  );
}

export default PageLayout;
