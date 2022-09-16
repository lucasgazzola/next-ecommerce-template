import dynamic from "next/dynamic";

import { ProductInterface } from "interfaces";

import style from "./ProductList.module.css";
import { RenderIfVisible } from "components";
// const RenderIfVisible = dynamic(() => import("components/RenderIfVisible"));
const Product = dynamic(() => import("components/Product"));
// const Product = dynamic(() => import("components/Product"), {
//   loading: () => (
//     <li>
//       <p>Cargando producto...</p>
//     </li>
//   )
// });

type Props = {
  products: Array<ProductInterface>;
};

function ProductsList({ products }: Props) {
  return (
    <ul className={style.productsListContainer}>
      {products &&
        products.map((product: ProductInterface) => (
          <RenderIfVisible key={product.id}>
            <Product {...product} />
          </RenderIfVisible>
        ))}
    </ul>
  );
}

export default ProductsList;
