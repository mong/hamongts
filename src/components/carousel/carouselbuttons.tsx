import React from "react";
import styles from "./carouselbuttons.module.css";

type CarouselButtonsProps = {
  nrOfButtons: number;
  activeCarousel: number;
  onClick?: (nr: number) => any;
};

export const CarouselButtons: React.FC<CarouselButtonsProps> = ({
  nrOfButtons,
  onClick,
  activeCarousel,
}) => {
  const clickHandler = (index) => {
    if (onClick) {
      onClick(index);
    }
  };
  return (
    <ul className={styles.bulletscontainer}>
      {Array(nrOfButtons)
        .fill(0)
        .map((a, i) => {
          return (
            <li className={styles.bulletcontainer} key={i}>
              <button
                aria-label={"show item " + i}
                className={`${styles.bullet} ${
                  i === activeCarousel ? styles.active : ""
                }`}
                onClick={() => clickHandler(i)}
              ></button>
            </li>
          );
        })}
    </ul>
  );
};
