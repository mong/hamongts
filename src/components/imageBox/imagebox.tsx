import Image from "next/image";
import { imgLoader } from "../../helpers/functions";

interface Props {
  caption?: string;
  alt: string;
  source: string;
  width: number;
  height: number;
}

export const ImageBox: React.FC<Props> = ({
  caption,
  alt,
  source,
  width,
  height,
}) => {
  return (
    <div>
      <Image
        loader={imgLoader}
        src={source}
        alt={alt}
        width={width}
        height={height}
      />
      <div>{caption}</div>
    </div>
  );
};
