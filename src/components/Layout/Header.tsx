import React from "react";
import Link from "next/link";
import Image from "next/image";

import { imgLoader } from "../../helpers/functions";
import styles from "../../styles/Home.module.css";
import HeaderClassNames from "./Header.module.css";

import { SearchButton } from "../Btns/SearchButton";
import { MenuButton } from "../Btns/MenuButton";
import { PopUp } from "../popup";

type HeaderProps = {
  origin: string;
  lang: "no" | "en";
};

type SearchBarProps = {
  lang: "no" | "en";
};

const SearchBar: React.FC<SearchBarProps> = ({ lang }) => {
  return (
    <div className={HeaderClassNames.searchBar}>
      <h1>{lang === "en" ? "Search" : "Søk"}</h1>
      <form>
        <label htmlFor="header-search-input">
          {lang === "en" ? "Search " : "Søk i alt innhold"}
        </label>
        <input
          id="header-search-input"
          name="search"
          type="search"
          placeholder={lang === "en" ? "Search " : "Søk i alt innhold"}
        />
        <button
          id="header-search-button"
          type="button"
          aria-label={lang === "en" ? "Search" : "Søk"}
        ></button>
      </form>
    </div>
  );
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
      <nav className={HeaderClassNames.headerNavContainer}>
        <div className={HeaderClassNames.navButtons}>
          <div className={HeaderClassNames.lang}>
            <div
              className={`${HeaderClassNames.no} ${
                lang === "no" ? HeaderClassNames.active : undefined
              }`}
            >
              <Link href={`${origin}/helseatlas`}>
                <a>NO</a>
              </Link>
            </div>
            <div
              className={`${HeaderClassNames.eng} ${
                lang === "en" ? HeaderClassNames.active : undefined
              }`}
            >
              <Link href={`${origin}/helseatlas/en`}>
                <a>ENG</a>
              </Link>
            </div>
          </div>
          <PopUp btnComponent={() => <SearchButton lang={lang} />}>
            <SearchBar lang={lang} />{" "}
          </PopUp>
          <PopUp btnComponent={() => <MenuButton lang={lang} />}>
            {"MENY"}
          </PopUp>
        </div>
      </nav>
    </header>
  );
};
