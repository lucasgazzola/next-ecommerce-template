import { createContext, useContext, useEffect, useState } from "react";
import { ProductInterface } from "interfaces";

type ProductContextProviderProps = {
  children: React.ReactNode;
};

type ProductsContextValue = {
  products?: Array<ProductInterface>;
};

const ProductsContext = createContext<ProductsContextValue>({});

export function ProductsContextProvider({
  children
}: ProductContextProviderProps) {
  const [products, setProducts] = useState<Array<ProductInterface>>([]);

  // useEffect(() => {
  //
  //   async function fetchProducts() {
  //     try {
  //       const response = await fetch("db.json");
  //       console.log(response);
  //       const data = await response.json();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchProducts();
  // }, []);

  const productsContextValue: ProductsContextValue = { products };

  return (
    <ProductsContext.Provider value={productsContextValue}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProductsContext() {
  return useContext(ProductsContext);
}
