import React from "react";
import Link from "next/link";
import Image from "next/image";

import { imgLoader } from "../../helpers/functions";
import styles from "../../styles/Home.module.css";
import { SearchButton } from "../Btns/SearchButton";
import { MenuButton } from "../Btns/MenuButton";

type HeaderProps = {
  origin: string;
  lang: "no" | "en";
};

export const Header: React.FC<HeaderProps> = ({ origin, lang }) => {
  return (
    <header className={`${styles.header_container}`}>
      <div className={styles.header_logo}>
        <Link
          href={`${origin}${lang === "en" ? "/helseatlas/en" : "/helseatlas"}`}
        >
          <a rel="home">
            <Image
              loader={imgLoader}
              src={`/helseatlas/img/logos/helseatlas.svg`}
              alt="Hjem"
              width={186}
              height={47}
            />
          </a>
        </Link>
      </div>
      <div className={styles.header_links}>
        <div className="lang">
          <div
            style={{
              borderRight: "1px solid #034584",
              paddingRight: "10px",
              fontWeight: lang === "en" ? undefined : 700,
              textDecoration: "underline",
            }}
          >
            <Link href={`${origin}/helseatlas`}>
              <a>NO</a>
            </Link>
          </div>
          <div
            style={{
              paddingLeft: "10px",
              fontWeight: lang === "no" ? undefined : 700,
              textDecoration: "underline",
            }}
          >
            <Link href={`${origin}/helseatlas/en`}>
              <a>ENG</a>
            </Link>
          </div>
        </div>
        <SearchButton lang={lang} />
        <MenuButton lang={lang} />
      </div>
    </header>
  );
};
