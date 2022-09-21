import React, { useState, useRef, useEffect } from "react";

import style from "./RenderIfVisible.module.css";

const isServer = typeof window === "undefined";

type Props = {
  defaultHeight?: number;
  visibleOffset?: number;
  root?: HTMLElement;
  children: React.ReactNode;
};

const RenderIfVisible: React.FC<Props> = ({
  defaultHeight = 400,
  visibleOffset = 100,
  root = null,
  children
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(isServer);
  const placeholderHeight = useRef<number>(defaultHeight);
  const intersectionRef = useRef<HTMLLIElement>(null);

  // Set visibility with intersection observer
  useEffect(() => {
    if (intersectionRef.current) {
      const currentRef = intersectionRef.current;
      const observer = new IntersectionObserver(
        (entries) => {
          if (typeof window !== undefined && window.requestIdleCallback) {
            window.requestIdleCallback(
              () => setIsVisible(entries[0].isIntersecting),
              {
                timeout: 600
              }
            );
          } else {
            setIsVisible(entries[0].isIntersecting);
          }
        },
        { root, rootMargin: `${visibleOffset}px 0px ${visibleOffset}px 0px` }
      );
      observer.observe(currentRef);
      return () => {
        if (intersectionRef && currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }
  }, [intersectionRef, root, visibleOffset]);

  // Set height after render
  useEffect(() => {
    if (intersectionRef.current && isVisible) {
      placeholderHeight.current = intersectionRef.current.offsetHeight;
    }
  }, [isVisible, intersectionRef]);

  return (
    <li className={style.productListItem} ref={intersectionRef}>
      {isVisible ? (
        children
      ) : (
        <div style={{ height: placeholderHeight.current }} />
      )}
    </li>
  );
};

export default RenderIfVisible;
