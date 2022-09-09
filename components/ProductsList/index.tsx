import { ProductInterface } from "interfaces";
import { Product } from "components";

import style from "./ProductList.module.css";

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
