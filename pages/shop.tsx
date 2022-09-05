import type { NextPage } from "next";
import { ProductsList } from "components";
import { PageLayout } from "layouts";

const Shop: NextPage = () => {
  return (
    <PageLayout title="Shop">
      <section id="shop-section">
        <h1>Shop section</h1>
        <ProductsList />
      </section>
    </PageLayout>
  );
};

export default Shop;
