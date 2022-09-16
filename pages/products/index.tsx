import type { NextPage } from "next";
import dynamic from "next/dynamic";

// import {  } from "components";
import { ProductInterface } from "interfaces";

import data from "db.json";
import { PageLayout } from "layouts";

const ProductsList = dynamic(() => import("components/ProductsList"), {
  loading: () => (
    <ul>
      <p>Cargando product list...</p>
    </ul>
  )
});

type ProductsPageProps = {
  // products: Array<ProductInterface>;
};

const Products = ({}: ProductsPageProps) => {
  const { products }: { products: Array<ProductInterface> } = data;

  return (
    <section id="products-section">
      <ProductsList products={products} />
    </section>
  );
};

// export async function getStaticProps() {

//   return {
//     props: {
//       products
//     }
//   };
// }

Products.layout = PageLayout;

export default Products;
