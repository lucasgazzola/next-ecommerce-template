import { useProductsContext } from "context/Products";
import { useEffect, useState } from "react";

import style from "./ProductsFilter.module.css";

type Props = {
  /* products: ProductInterface[]; */
};

function ProductsFilter({}: Props) {
  const { products, setFilteredProducts } = useProductsContext();
  const [productName, setProductName] = useState("");

  useEffect(() => {
    if (setFilteredProducts) {
      if (productName.length >= 4) {
        setFilteredProducts(
          products?.filter(
            (product) =>
              product.title.toLowerCase().includes(productName.toLowerCase()) ||
              product.description
                .toLowerCase()
                .includes(productName.toLowerCase())
          )
        );
      } else {
        setFilteredProducts(products);
      }
    }
  }, [productName, products, setFilteredProducts]);

  return (
    <div className={style.filterContainer}>
      <label className={style.labelElement} htmlFor="name-filter">
        Enter a product to start searching:
      </label>
      <input
        className={style.inputElement}
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="Enter a product..."
        name="name-filter"
        type="text"
      />
    </div>
  );
}

export default ProductsFilter;
