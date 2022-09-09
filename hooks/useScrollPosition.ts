import { useEffect, useState } from "react";

// How many pixels grow or shrik the header
const PIXELS_STEP = 8;

// All the header is hidden
const LOWEST_TOP_VALUE = -80;

// All the header is out
const HIGHEST_TOP_VALUE = 0;

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  const isScrollDown = scrollPosition > lastScrollPosition;
  const isHeaderHidden = headerTop === LOWEST_TOP_VALUE;
  const isHeaderAllOut = headerTop === HIGHEST_TOP_VALUE;

  const handleHideNavBar = (prevState: number) =>
    prevState - PIXELS_STEP <= LOWEST_TOP_VALUE
      ? LOWEST_TOP_VALUE
      : prevState - PIXELS_STEP;

  const handleTakeHeaderOut = (prevState: number) =>
    prevState + PIXELS_STEP >= HIGHEST_TOP_VALUE
      ? HIGHEST_TOP_VALUE
      : prevState + PIXELS_STEP;

  useEffect(() => {
    const updatePosition = () => {
      if (isScrollDown && !isHeaderHidden) {
        setHeaderTop(handleHideNavBar);
      }
      if (!isScrollDown && !isHeaderAllOut) {
        setHeaderTop(handleTakeHeaderOut);
      }
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, [isHeaderAllOut, isHeaderHidden, isScrollDown]);

  useEffect(() => {
    scrollPosition !== 0 &&
      setLastScrollPosition((prev) =>
        prev > scrollPosition ? scrollPosition + 1 : scrollPosition - 1
      );
  }, [scrollPosition]);

  return { headerTop };
};

export default useScrollPosition;
