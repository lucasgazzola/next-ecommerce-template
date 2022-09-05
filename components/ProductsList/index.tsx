import { ProductInterface } from "interfaces";
import { Product } from "components";
import { useProductsContext } from "context/Products";

type Props = {};

function ProductsList({}: Props) {
  const { products } = useProductsContext();

  return (
    <ul>
      {products &&
        products.map((product: ProductInterface) => (
          <Product key={product.id} {...product} />
        ))}
    </ul>
  );
}

export default ProductsList;
