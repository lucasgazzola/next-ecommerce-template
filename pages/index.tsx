import type { NextPage } from "next";
import dynamic from "next/dynamic";

// import { ProductsList } from "components";
import { PageLayout } from "layouts";

const ProductsList = dynamic(() => import("components/ProductsList"), {
  loading: () => <p>Loading products list</p>
});

import style from "styles/Home.module.css";

const Home: NextPage = () => {
  //TODO: https://angloitalian.com/pages/about for reference

  return (
    <PageLayout title="Home">
      <section id="home-section" className={style.home}>
        <h2>Home section</h2>
        <article>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          molestiae consequuntur earum voluptatibus tempore quos culpa laborum
          quam harum cum. Dolorum mollitia dignissimos temporibus, labore rem
          eos cum! Et, tempora? Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Harum aliquid voluptate nobis. Reiciendis excepturi
          praesentium, officia natus odio alias sunt sed recusandae quasi
          necessitatibus illum unde? Natus illo aperiam et? Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Sunt dolorem ex excepturi
          similique reiciendis illum? Inventore placeat exercitationem magni
          consequatur suscipit ea temporibus veritatis doloribus, laborum rem
          totam corporis voluptates? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Iure, itaque sapiente similique exercitationem animi
          dolore, cumque numquam nesciunt dignissimos adipisci voluptates
          repellendus neque, esse cupiditate consequuntur incidunt in
          perferendis labore.
        </article>
      </section>
    </PageLayout>
  );
};

export default Home;
