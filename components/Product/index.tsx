import { ProductInterface } from "interfaces";
import Image from "next/image";
import Link from "next/link";

import style from "./Product.module.css";

function Product({ id, image, price, rating, title }: ProductInterface) {
  return (
    <li className={style.linkContainer}>
      <Link href={`products/${id.toString()}`}>
        <a className={style.productContainer}>
          <header>
            <h3>{title}</h3>
          </header>
          <div className={style.imageContainer}>
            <Image
              priority
              alt={title}
              src={image}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <footer>
            <p className={style.descriptionContainer}>
              ${price} - {rating.rate}⭐
            </p>
          </footer>
        </a>
      </Link>
    </li>
  );
}

export default Product;
