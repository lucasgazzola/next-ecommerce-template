import Link from "next/link";

import { Navbar } from "components";
import { useScrollPosition } from "hooks";

import style from "./Header.module.css";

type Props = {};

function Header({}: Props) {
  const { headerTop: top } = useScrollPosition();

  return (
    <header style={{ top }} className={style.header}>
      <Link href="/">
        <a>
          <div>👔👖👗💎</div>
        </a>
      </Link>
      <Navbar />
    </header>
  );
}

export default Header;
