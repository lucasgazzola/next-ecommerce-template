import Link from "next/link";

import { ShoppingCart, LoginButton, Navbar } from "components";
import { useScrollPosition } from "hooks";

import style from "./Header.module.css";

type Props = {};

function Header({}: Props) {
  const { headerTop: top } = useScrollPosition();
  const isLoggedIn = true;

  return (
    <header style={{ top }} className={style.header}>
      <Link href="/">
        <a>
          <div>👔👖👗💎</div>
        </a>
      </Link>
      <Navbar />
      {!isLoggedIn ? <LoginButton /> : <ShoppingCart />}
    </header>
  );
}

export default Header;
