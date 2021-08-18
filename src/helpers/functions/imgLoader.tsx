import { ImageLoader } from "next/image";

export const myLoader: ImageLoader = ({ src, width, quality }) => {
  return `https://raw.githubusercontent.com/mong/hamongts/atlasLandingPage/public/img/logos${src}?w=${width}&q=${quality || 75}`;
};
