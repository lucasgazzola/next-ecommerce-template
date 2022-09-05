import style from "styles/Home.module.css";
import type { NextPage } from "next";
import { ProductsList } from "components";
import { PageLayout } from "layouts";

const Home: NextPage = () => {
  return (
    <PageLayout title="Home">
      <section id="home-section" className={style.home}>
        <h1>Home section</h1>
        <ProductsList />
      </section>
    </PageLayout>
  );
};

export default Home;
