import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import style from "./ShoppingCart.module.css";

type Props = {};

function ShoppingCart({}: Props) {
  const shoppingCartQuantity = 2;

  return (
    <Link href="/cart">
      <a className={style.shoppingCart}>
        <FaShoppingCart size={28} />
        <span className={style.shoppingCartNumber}>{shoppingCartQuantity}</span>
      </a>
    </Link>
  );
}

export default ShoppingCart;
