import Navbar from "components/Navbar";
import style from "./Header.module.css";
import { ShoppingCart, LoginButton } from "components";

type Props = {};

function Header({}: Props) {
  const isLoggedIn = true;

  return (
    <header className={style.header}>
      <div>Logo</div>
      <Navbar />
      {!isLoggedIn ? <LoginButton /> : <ShoppingCart />}
    </header>
  );
}

export default Header;
