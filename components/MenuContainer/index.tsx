import dynamic from "next/dynamic";

import style from "./MenuContainer.module.css";

const NavLinksContainer = dynamic(import("components/NavLinksContainer"), {
  loading: () => <p>Loading options...</p>
});

type Props = { handleCloseMenu: Function; openMenu: boolean };

// const navLinks = [
//   {
//     id: 1,
//     title: "Home",
//     href: "/"
//   },
//   {
//     id: 2,
//     title: "Products",
//     href: "/products"
//   },
//   {
//     id: 3,
//     title: "About us",
//     href: "/about"
//   },
//   {
//     id: 4,
//     title: "Contact",
//     href: "/contact"
//   }
// ];

function MenuContainer({ handleCloseMenu, openMenu }: Props) {
  return (
    <>
      <div className={openMenu ? style.menuOpen : style.menuClosed}>
        {openMenu && (
          <ul
            onClick={() => handleCloseMenu()}
            className={style.navLinksContainer}
          >
            <NavLinksContainer />
          </ul>
        )}
      </div>
    </>
  );
}

export default MenuContainer;
