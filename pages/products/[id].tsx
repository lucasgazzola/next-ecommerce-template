import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";

import { PageLayout } from "layouts";
import { ProductInterface } from "interfaces";

// TODO: replace db.json
import data from "db.json";
import Link from "next/link";

type Props = {
  product: ProductInterface;
  total: number;
};

const Product: NextPage<Props> = ({ product, total }: Props) => {
  return (
    <PageLayout title="Shop">
      <Link href="/products">
        <a>
          {/* // TODO: Add GO BACK ICON */}
          <div>&lt;- BACK</div>
        </a>
      </Link>
      <div>
        This is a product with id: {product.id} and name: {product.title}
      </div>
      <div>
        {product.id > 1 && (
          <Link href={`${product.id - 1}`}>
            <a>&lt; Back</a>
          </Link>
        )}
        {product.id < total && (
          <Link href={`${product.id + 1}`}>
            <a>Next -&gt;</a>
          </Link>
        )}
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
