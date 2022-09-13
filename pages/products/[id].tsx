import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import { IoMdArrowBack } from "react-icons/io";
import { GrPrevious, GrNext } from "react-icons/gr";

import { PageLayout } from "layouts";
import { ProductInterface } from "interfaces";

import style from "styles/[id].module.css";

import data from "db.json";

type Props = {
  product: ProductInterface;
  total: number;
};

const Product: NextPage<Props> = ({ product, total }: Props) => {
  const { title, image, rating, price, description, category } = product;
  return (
    <PageLayout title="Shop">
      <div className={style.singleProductPage}>
        <Link href="/products">
          <a>
            <div className={style.backButtonContainer}>
              <IoMdArrowBack size={24} />
              <span className={style.textContainer}>BACK</span>
            </div>
          </a>
        </Link>
        <div className={style.productContainer}>
          <header className={style.productContainer}>
            <span className={style.productTitle}>{title}</span>
            <span className={style.productCategory}>{category}</span>
          </header>
          <main className={style.main}>
            <div className={style.imageContainer}>
              <Image
                priority
                alt={title}
                src={image}
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
              <span className={style.rate}>{rating.rate}⭐</span>
            </p>
          </footer>
        </div>
        <div className={style.navigationContainer}>
          {product.id > 1 && (
            <Link href={`${product.id - 1}`}>
              <a className={style.prevNextButtons}>
                <GrPrevious />
                <span>Previous</span>
              </a>
            </Link>
          )}
          {product.id < total && (
            <Link href={`${product.id + 1}`}>
              <a className={style.prevNextButtons}>
                <span>Next</span>
                <GrNext />
              </a>
            </Link>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export async function getStaticPaths() {
  // const response = await fetch("db.json");
  // const data = await response.json();

  const { products } = data;

  const paths = products.map((product: ProductInterface) => ({
    params: { id: product.id.toString() }
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
