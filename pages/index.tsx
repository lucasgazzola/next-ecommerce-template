import type { NextPage } from "next";
import ProductsList from "../components/ProductsList";
import PageLayout from "../layouts/PageLayout";

const Home: NextPage = () => {
  return (
    <PageLayout title="Home">
      <section id="home">
        <h1>Home section</h1>
        <ProductsList />
      </section>
    </PageLayout>
  );
};

export default Home;
