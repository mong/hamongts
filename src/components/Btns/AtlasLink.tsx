import Link from "next/link";
import Image from "next/image";
import { CSSProperties } from "react";
import classNames from "./AtlasLink.module.css";
import { timeFormat } from "d3-time-format";

import { imgLoader } from "../../helpers/functions";

interface Props {
  linkTo: string;
  imageSource: string;
  linkTitle: string;
  linkText: string;
  className?: string;
  style?: CSSProperties;
  wide?: boolean;
  date: Date;
  newlyUpdated?: boolean;
  lang: "no" | "en";
}

const formatTime = timeFormat("%d.%m.%Y");

export const AtlasLink: React.FC<Props> = ({
  style,
  className,
  linkTo,
  imageSource,
  linkTitle,
  wide,
  linkText,
  date,
  newlyUpdated,
  lang,
}) => {
  console.log(imageSource);

  return (
    <div
      className={`${classNames.linkOuterWrapper} ${
        wide ? classNames.wide : ""
      }`}
    >
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
                layout="intrinsic"
              />
            </div>
            <div className={classNames.linkText}>
              <div
                className={`${classNames.linkDateContainer} ${
                  newlyUpdated ? classNames.newlyUpdated : ""
                }`}
              >
                <div className={classNames.outerCircle}>
                  <div className={classNames.innerDot}></div>
                </div>
                {lang === "en" ? "Published:" : "Publisert:"}
                <strong className={classNames.date}>
                  {formatTime(new Date(date))}
                </strong>
              </div>
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
