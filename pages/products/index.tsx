import type { NextPage } from "next";
import { ProductsList } from "components";
import { PageLayout } from "layouts";
import { ProductInterface } from "interfaces";

// TODO: replace db.json
import data from "db.json";

type ProductsPageProps = {
  products: Array<ProductInterface>;
};

const Products: NextPage<ProductsPageProps> = ({
  products
}: ProductsPageProps) => {
  return (
    <PageLayout title="Products">
      <section id="products-section">
        <ProductsList products={products} />
      </section>
    </PageLayout>
  );
};

export async function getStaticProps() {
  const { products }: { products: Array<ProductInterface> } = data;

  return {
    props: {
      products
    }
  };
}

export default Products;
