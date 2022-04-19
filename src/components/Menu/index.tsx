import React from "react";
import Link from "next/link";
import classNames from "./Menu.module.css";

type MenuProps = {
  lang: "no" | "en";
};

export const Menu: React.FC<MenuProps> = ({ lang }) => {
  return <>{lang === "en" ? <EnglishMenu /> : <NorskMeny />}</>;
};

const EnglishMenu = () => {
  return (
    <ul>
      <span className={classNames.title}>About</span>
      <ul>
        <li>
          <Link href="/en/static/about">Helseatlas</Link>
        </li>
        <li>
          <Link href="/en/static/contact">Contact</Link>
        </li>
      </ul>
    </ul>
  );
};

const NorskMeny = () => {
  return (
    <div className={classNames.main_menu}>
      <div className={classNames.container}>
        <div className={classNames.nav_group}>
          <div className={classNames.body}>
            <ul>
              <span className={classNames.title}>Om oss</span>
              <ul>
                <li>
                  <Link href="/statisk/om">Helseatlas</Link>
                </li>
                <li>
                  <Link href="/statisk/kontakt">Kontakt</Link>
                </li>
              </ul>
            </ul>
            <ul>
              <span className={classNames.title}>Om oss</span>
              <ul>
                <li>
                  <Link href="/statisk/om">Helseatlas</Link>
                </li>
                <li>
                  <Link href="/statisk/kontakt">Kontakt</Link>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
