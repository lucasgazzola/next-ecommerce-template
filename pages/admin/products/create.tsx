import { AdminPageLayout } from "layouts";

import style from "styles/admin/products/CreateProducts.module.css";

import { Product } from "@prisma/client";
import React from "react";

type Props = {};

// Product = {
//   id: number;            autogenerated
//   title: string;         <-
//   price: number;         <-
//   description: string;   <-
//   image: Buffer[];       <-
//   stock: number;         <-
//   rating: number;        calculated
//   cantVotos: number;     calculated
//   colorId: number;       <- select from another table
//   categoryId: number;    <- select from another table
//   createdAt: Date;       autogenerated
//   updatedAt: Date;       autogenerated

function CreateProduct({}: Props) {
  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    alert("product added");
  };

  return (
    <div>
      <h2 className={style.addProductTitle}>Add new product</h2>
      <form onSubmit={handleAddProduct} className={style.addProductForm}>
        <div className={style.formGroupContainer}>
          <label htmlFor="product-title">Title</label>
          <input type="text" name="product-title" id="product-title" />
        </div>
        <div className={style.formGroupContainer}>
          <label htmlFor="product-price">Price</label>
          <input type="text" name="product-price" id="product-price" />
        </div>
        <div className={style.formGroupContainer}>
          <label htmlFor="product-desciption">Description</label>
          <textarea
            rows={10}
            name="product-desciption"
            id="product-desciption"
          />
        </div>
        <div className={style.formGroupContainer}>
          <label htmlFor="product-images">Images</label>
          <input type="text" name="product-images" id="product-images" />
        </div>
        <div className={style.formGroupContainer}>
          <label htmlFor="product-stock">Stock</label>
          <input
            type="number"
            min="0"
            name="product-stock"
            id="product-stock"
          />
        </div>
        <div className={style.formGroupContainer}>
          <button className={style.buttonSubmit} type="submit">
            Add product
          </button>
        </div>
      </form>
    </div>
  );
}

CreateProduct.layout = AdminPageLayout;

export default CreateProduct;
