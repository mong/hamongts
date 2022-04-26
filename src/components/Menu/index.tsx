import React from "react";
import Link from "next/link";
import classNames from "./Menu.module.css";

type MenuProps = {
  lang: "no" | "en";
};

export const Menu: React.FC<MenuProps> = ({ lang }) => {
  return (
    <div className={classNames.main_menu}>
      <div className={classNames.container}>
        <div className={classNames.nav_group}>
          <div className={classNames.body}>
            <>{lang === "en" ? <EnglishMenu /> : <NorskMeny />}</>
          </div>
        </div>
      </div>
    </div>
  );
};

const EnglishMenu = () => {
  return (
    <>
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
    </>
  );
};

const NorskMeny = () => {
  return (
    <>
      <div className={classNames.inner_nav_group}>
        <ul>
          <span className={classNames.title}>Om oss</span>
          <ul>
            <li>
              <Link href="/statisk/om">Om helseatlas</Link>
            </li>
            <li>
              <Link href="/statisk/kontakt">Kontakt</Link>
            </li>
          </ul>
        </ul>
      </div>
      <div className={classNames.inner_nav_group}>
        <ul>
          <span className={classNames.title}>Våre helseatlas</span>
          <ul>
            <li>
              <Link href="/v1/kvalitet">Helseatlas for kvalitet</Link>
            </li>
            <li>
              <Link href="/v1/psyk">
                Helseatlas for psykisk helsevern og rusbehandling
              </Link>
            </li>
            <li>
              <Link href="/v1/fodsel">Helseatlas for fødselshjelp</Link>
            </li>
            <li>
              <Link href="/v1/gyn">Helseatlas for gynekologi</Link>
            </li>
            <li>
              <Link href="/v1/ortopedi">Helseatlas i ortopedi for Noreg</Link>
            </li>
            <li>
              <Link href="/v1/dagkir2">Dagkirurgi i Norge 2013–2017</Link>
            </li>
            <li>
              <Link href="/v1/kols">Helseatlas kols</Link>
            </li>
            <li>
              <Link href="/v1/eldre">Eldrehelseatlas for Norge</Link>
            </li>
            <li>
              <Link href="/v1/nyfodt">Norsk nyfødtmedisinsk helseatlas</Link>
            </li>
            <li>
              <Link href="/v1/barn">Barnehelseatlas for Norge</Link>
            </li>
            <li>
              <Link href="/v1/dagkir">Dagkirurgi i Norge 2011–2013</Link>
            </li>
          </ul>
        </ul>
      </div>
    </>
  );
};
