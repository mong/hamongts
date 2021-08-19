import Link from "next/link";
import { CSSProperties, ReactNode } from "react";
import styles from "../../styles/Home.module.css";

interface Props {
  children: ReactNode;
  linkTo: string;
  className?: string;
  style?: CSSProperties;
}

export const AtlasLink = (props: Props) => {
  const { children, style, className, linkTo } = props;

  return (
    <div
      className={`${styles.block_button} ${className ?? ""}`}
      style={{ ...style }}
    >
      <Link href={`/${linkTo}`}>
        <a style={{ width: "100%", height: "100%" }}>{children}</a>
      </Link>
    </div>
  );
};
