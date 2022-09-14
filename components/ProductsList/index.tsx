import dynamic from "next/dynamic";

import { ProductInterface } from "interfaces";

import style from "./ProductList.module.css";

const Product = dynamic(() => import("components/Product"), {
  loading: () => (
    <li>
      <p>Cargando producto...</p>
    </li>
  )
});

type Props = {
  products: Array<ProductInterface>;
};

function ProductsList({ products }: Props) {
  return (
    <ul className={style.productsListContainer}>
      {products &&
        products.map((product: ProductInterface) => (
          <Product key={product.id} {...product} />
        ))}
    </ul>
  );
}

export default ProductsList;
