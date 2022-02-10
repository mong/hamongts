import React from "react";
import styles from "./carouselbullets.module.css";

type CarouselBulletsProps = {
  nrOfBullets: number;
  activeCarousel: number;
  onClick?: (nr: number) => any;
};

export const CarouselBullets: React.FC<CarouselBulletsProps> = ({
  nrOfBullets,
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
      {Array(nrOfBullets)
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
