import { createContext, useContext, useEffect, useState } from "react";
import { ProductInterface } from "interfaces";
import data from "db.json";

type ProductContextProviderProps = {
  children: React.ReactNode;
};

type ProductsContextValue = {
  products?: Array<ProductInterface>;
  setProducts?: Function;
  filteredProducts?: Array<ProductInterface>;
  setFilteredProducts?: Function;
};

const ProductsContext = createContext<ProductsContextValue>({});

export function ProductsContextProvider({
  children
}: ProductContextProviderProps) {
  const [products, setProducts] = useState<Array<ProductInterface>>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductInterface[]>(
    []
  );

  useEffect(() => {
    setProducts(data.products);
    setFilteredProducts(data.products);
  }, []);

  const productsContextValue: ProductsContextValue = {
    products,
    setProducts,
    filteredProducts,
    setFilteredProducts
  };

  return (
    <ProductsContext.Provider value={productsContextValue}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProductsContext() {
  return useContext(ProductsContext);
}
