import {
  LoginButton,
  NavLinksContainer,
  HamburgerMenu,
  ShoppingCart
} from "components";

import style from "./Navbar.module.css";
type Props = {};

const bandera = false;

function Navbar({}: Props) {
  const isLoggedIn = false;

  return (
    <nav className={style.navbar}>
      {!isLoggedIn ? <LoginButton /> : <ShoppingCart />}
      {bandera ? (
        <ul className={style.linksContainer}>
          <NavLinksContainer />
        </ul>
      ) : (
        <HamburgerMenu />
      )}
    </nav>
  );
}

export default Navbar;
