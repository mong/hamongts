import React from "react";
import Link from "next/link";

type MenuProps = {
  lang?: "no" | "en";
};

export const Menu: React.FC<MenuProps> = ({ lang }) => {
  return (
    <>
      <ul>
        <span>Om oss</span>
        <ul>
          <li>
            <Link href="/helseatlas/statisk/om">Helseatlas</Link>
          </li>
        </ul>
      </ul>
    </>
  );
};
