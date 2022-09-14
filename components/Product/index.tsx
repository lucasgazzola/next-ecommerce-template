import Image from "next/image";
import Link from "next/link";

import { useEffect } from "react";

import { ProductInterface } from "interfaces";

import style from "./Product.module.css";

function Product({ id, image, price, rating, title }: ProductInterface) {
  useEffect(() => {
    console.log("product rendered");
  }, []);

  return (
    <li className={style.linkContainer}>
      <Link href={`products/${id.toString()}`}>
        <a className={style.productContainer}>
          <header>
            <h3>{title}</h3>
          </header>
          <div className={style.imageContainer}>
            <Image
              loading="lazy"
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
    </li>
  );
}

export default Product;
