import { GetStaticProps, GetStaticPropsContext } from "next";
import Image from "next/image";
import dynamic from "next/dynamic";

import { ProductInterface } from "interfaces";

import style from "styles/[id].module.css";
import { PageLayout } from "layouts";
import { GoBackLink } from "components";

import data from "db.json";

const PreviousOrNextProductButtons = dynamic(
  () => import("components/PreviousOrNextProductButtons"),
  { loading: () => <p>Loading...</p> }
);

type Props = {
  product: ProductInterface;
  total: number;
};

const Product = ({ product, total }: Props) => {
  const { title, image, rating, price, description } = product;

  const hasNext = product.id < total;
  const hasPrevious = product.id > 1;

  return (
    <div className={style.singleProductPage}>
      <GoBackLink href="/products" />
      <div className={style.productContainer}>
        <header className={style.productContainer}>
          <span className={style.productTitle}>{title}</span>
          {/* <span className={style.productCategory}>{category}</span> */}
        </header>
        <main className={style.main}>
          <div className={style.imageContainer}>
            <Image
              priority
              alt={title}
              // TODO! ADD REAL IMG SOURCE
              src={"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"}
              width={350}
              height={400}
              objectFit="contain"
            />
          </div>
          <article className={style.descriptionContainer}>
            <p className={style.description}>{description}</p>
          </article>
        </main>
        <footer>
          <p>
            <span className={style.price}>${price}</span> -{" "}
            <span className={style.rate}>{rating}⭐</span>
          </p>
        </footer>
      </div>
      <PreviousOrNextProductButtons
        productId={product.id}
        hasNext={hasNext}
        hasPrevious={hasPrevious}
      />
    </div>
  );
};

Product.layout = PageLayout;
// Product.subLayout = UniqueProductLayout;

export async function getStaticPaths() {
  // const response = await fetch("db.json");
  // const data = await response.json();
  const { products } = data;
  const paths = products.map(({ id }: { id: ProductInterface["id"] }) => ({
    params: { id: id.toString() }
  }));
  return {
    paths,
    fallback: false
  };
}

export const getStaticProps: GetStaticProps = async ({
  params
}: GetStaticPropsContext) => {
  const { products } = data;
  const [product] = products.filter(
    (product: ProductInterface) => product.id.toString() === params?.id
  );
  return {
    props: { product, total: products.length }
  };
};

export default Product;
