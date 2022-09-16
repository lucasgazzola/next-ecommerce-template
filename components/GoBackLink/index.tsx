type Props = {};
import { IoMdArrowBack } from "react-icons/io";
import Link from "next/link";
import style from "./GoBackLink.module.css";
type GoBackLinkProps = {
  href: string;
};

const GoBackLink = ({ href }: GoBackLinkProps) => {
  return (
    <Link href={href}>
      <a>
        <div className={style.backButtonContainer}>
          <IoMdArrowBack size={24} />
          <span className={style.textContainer}>BACK</span>
        </div>
      </a>
    </Link>
  );
};

export default GoBackLink;
