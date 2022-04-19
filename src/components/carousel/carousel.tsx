import React, { useState } from "react";
import { CarouselItemProps } from "./carouelitem";
import { CarouselButtons } from "./carouselbuttons";
import { BiBarChart, BiMapPin } from "react-icons/bi";
import { VscTable } from "react-icons/vsc";

import styles from "./carousel.module.css";

const chartIcons = {
  barchart: <BiBarChart color="white" size="28px" />,
  table: <VscTable color="white" size="28px" />,
  map: <BiMapPin color="white" size="28px" />,
};

type CarouselProps = {
  active?: number;
  children:
    | React.ReactElement<CarouselItemProps & React.RefObject<any>>
    | Array<React.ReactElement<CarouselItemProps & React.RefObject<any>>>;
};

export const Carousel: React.FC<CarouselProps> = ({ active, children }) => {
  const [activeComp, setActiveComp] = useState<number>(active ?? 0);

  const numberOfChildren: number = React.Children.count(children);

  const options = React.Children.map(
    children,
    (child: React.ReactElement<CarouselItemProps>, i: number) => ({
      value: i,
      label: child ? child.props.label : `figur ${i + 1}`,
      icon: chartIcons[child.props.label],
    })
  );

  console.log(options);

  if (numberOfChildren === 0) {
    return;
  }

  return (
    <div
      className={styles.carouselWrapper}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {numberOfChildren > 1 && (
        <CarouselButtons
          options={options}
          activeCarousel={activeComp}
          nrOfButtons={numberOfChildren}
          onClick={(i) => setActiveComp(i)}
        />
      )}
      <div className={styles.carousel}>{children[activeComp]}</div>
    </div>
  );
};
