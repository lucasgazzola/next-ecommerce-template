import dynamic from "next/dynamic";

import { ProductInterface } from "interfaces";
import { RenderIfVisible, ProductsFilter } from "components";
import { useProductsContext } from "context/Products";

import style from "./ProductList.module.css";

const Product = dynamic(() => import("components/Product"));

type Props = {};

function ProductsList({}: Props) {
  const { filteredProducts } = useProductsContext();
  return (
    <>
      <ProductsFilter />
      <ul className={style.productsListContainer}>
        {filteredProducts &&
          filteredProducts.map((product: ProductInterface) => (
            <RenderIfVisible key={product.id}>
              <Product {...product} />
            </RenderIfVisible>
          ))}
      </ul>
    </>
  );
}

export default ProductsList;
