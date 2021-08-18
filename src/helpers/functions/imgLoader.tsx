import { ImageLoader } from "next/image";

export const myLoader: ImageLoader = ({ src, width, quality }) => {
  return `https://github.com/mong/hamongts/tree/atlasLandingPage/public/img/logos${src}?w=${width}&q=${quality || 75}`;
};
