import Link from "next/link";
import Image from "next/image";
import { CSSProperties } from "react";
import classNames from "./AtlasLink.module.css";

import { imgLoader } from "../../helpers/functions";

interface Props {
  linkTo: string;
  imageSource: string;
  linkTitle: string;
  linkText: string;
  className?: string;
  style?: CSSProperties;
}

export const AtlasLink: React.FC<Props> = ({
  style,
  className,
  linkTo,
  imageSource,
  linkTitle,
  linkText,
}) => {
  return (
    <div className={classNames.linkOuterWrapper}>
      <Link href={`/${linkTo}`}>
        <a>
          <div className={classNames.linkInnerWrapper}>
            <div className={classNames.linkImageWrapper}>
              <Image
                loader={imgLoader}
                src={imageSource}
                alt={"atlas photo"}
                width={1160}
                height={740}
              />
            </div>
            <div className={classNames.linkText}>
              <div className={classNames.linkTitle}>{linkTitle}</div>
              <div className={classNames.linkIngress}>
                <p>{linkText}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};
