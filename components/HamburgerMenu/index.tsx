import { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";

import { MenuContainer } from "components";

import style from "./HamburgerMenu.module.css";

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
