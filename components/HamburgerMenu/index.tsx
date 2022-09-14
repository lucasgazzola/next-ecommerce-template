import dynamic from "next/dynamic";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import style from "./HamburgerMenu.module.css";

const MenuContainer = dynamic(() => import("components/MenuContainer"), {
  loading: () => <p>Cargando menu...</p>
});

type Props = {};

function HamburgerMenu({}: Props) {
  const [openMenu, setOpenMenu] = useState(false);

  const handleTogleOpenMenu = () => {
    setOpenMenu((prev: boolean) => !prev);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <div onClick={handleTogleOpenMenu} className={style.menuButtonContainer}>
        <AiOutlineMenu size={32} />
      </div>
      <MenuContainer openMenu={openMenu} handleCloseMenu={handleCloseMenu} />
    </>
  );
}

export default HamburgerMenu;
