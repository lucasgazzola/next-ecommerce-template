import Link from "next/link";
import { memo } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

import { ProductInterface } from "interfaces";

import style from "./PreviousOrNextProductsButtons.module.css";

type previousOrNextProductProps = {
  hasPrevious: boolean;
  hasNext: boolean;
  productId: ProductInterface["id"];
};

const PreviousOrNextProductButtons = ({
  hasPrevious,
  hasNext,
  productId
}: previousOrNextProductProps) => {
  return (
    <div className={style.navigationContainer}>
      {hasPrevious && (
        <Link href={`${productId - 1}`}>
          <a className={style.prevNextButtons}>
            <GrPrevious />
            <span>Previous</span>
          </a>
        </Link>
      )}
      {hasNext && (
        <Link href={`${productId + 1}`}>
          <a className={style.prevNextButtons}>
            <span>Next</span>
            <GrNext />
          </a>
        </Link>
      )}
    </div>
  );
};

export default PreviousOrNextProductButtons;
