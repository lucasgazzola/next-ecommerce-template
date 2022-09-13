import Link from "next/link";
import React from "react";

import style from "./NavLinksContainer.module.css";

type Props = {};

const navLinks = [
  {
    id: 1,
    title: "Home",
    href: "/"
  },
  {
    id: 2,
    title: "Products",
    href: "/products"
  },
  {
    id: 3,
    title: "About us",
    href: "/about"
  },
  {
    id: 4,
    title: "Contact",
    href: "/contact"
  }
];

function NavLinksContainer({}: Props) {
  return (
    <>
      {navLinks.map((link) => (
        <li key={link.id} className={style.linkItemContainer}>
          <Link href={link.href}>
            <a>{link.title}</a>
          </Link>
        </li>
      ))}
    </>
  );
}

export default NavLinksContainer;
