import styles from "../src/styles/Home.module.css";
import React from "react";
import Layout from "../src/components/Layout";
import { Carousel } from "../src/components/carousel";
import { CarouselItem } from "../src/components/carousel/carouelitem";

type CarouselPageProps = {
  children?: React.ReactNode;
};

const CarouselPage = ({ }: CarouselPageProps): React.ReactElement => {
  const childrenRef = React.useRef<HTMLElement[]>([]);
  return (
    <Layout lang="no">
      <Carousel active={1}>
        <CarouselItem label="Item 1">
          <div
            style={{
              backgroundColor: "black",
              width: "300px",
              height: "400px",
              marginBottom: "20px",
              marginTop: "10px",
            }}
          >
            VOV
            {" "}
          </div>
        </CarouselItem>
        <CarouselItem label="Item 2" ref={childrenRef}>
          <div
            style={{
              backgroundColor: "lightgrey",
              width: "700px",
              height: "600px",
              marginTop: "10px",
              marginBottom: "20px",
            }}
          >
            2
            {" "}
          </div>
        </CarouselItem>
        <CarouselItem label="Item 3">
          <div
            style={{
              backgroundColor: "lightblue",
              width: "300px",
              height: "400px",
              marginBottom: "20px",
              marginTop: "10px",
            }}
          >
            {" "}
            3
          </div>
        </CarouselItem>
      </Carousel>
    </Layout >
  );
};

export default CarouselPage;