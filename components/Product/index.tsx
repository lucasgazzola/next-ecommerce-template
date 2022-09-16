import Image from "next/image";
import Link from "next/link";

import { ProductInterface } from "interfaces";

import style from "./Product.module.css";
import { memo } from "react";

function Product({ id, image, price, rating, title }: ProductInterface) {
  return (
    <div className={style.linkContainer}>
      <Link href={`products/${id.toString()}`}>
        <a className={style.productContainer}>
          <header>
            <h3>{title}</h3>
          </header>
          <div className={style.imageContainer}>
            <Image
              priority
              alt={title}
              src={"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <footer>
            <p className={style.descriptionContainer}>
              ${price} - {rating}⭐
            </p>
          </footer>
        </a>
      </Link>
    </div>
  );
}

function areEqual(prevProps: ProductInterface, nextProps: ProductInterface) {
  return prevProps.title === nextProps.title;
}

export default memo(Product, areEqual);
