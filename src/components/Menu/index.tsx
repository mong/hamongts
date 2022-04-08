import React from "react";
import Link from "next/link";

type MenuProps = {
  lang: "no" | "en";
};

export const Menu: React.FC<MenuProps> = ({ lang }) => {
  console.log({ lang });

  return <>{lang === "en" ? <EnglishMenu /> : <NorskMeny />}</>;
};

const EnglishMenu = () => {
  return (
    <ul>
      <span>About</span>
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
    <ul>
      <span>Om oss</span>
      <ul>
        <li>
          <Link href="/statisk/om">Helseatlas</Link>
        </li>
        <li>
          <Link href="/statisk/kontakt">Kontakt</Link>
        </li>
      </ul>
    </ul>
  );
};
