import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { imgLoader } from "../../helpers/functions";
import { useEffect, useState } from "react";
import { LayoutHead } from "./LayoutHead";
import { Header } from "./Header";

interface Props {
  children: any;
  title?: string;
  page?: string;
  lang: "no" | "en";
}

export default function Layout({
  children,
  title = "Helseatlas",
  lang,
}: Props) {
  const [origin, setOrigin] = useState("");
  useEffect(() => {
    setOrigin(window.location.origin);
  }, [setOrigin]);

  return (
    <>
      <LayoutHead title={title} />
      <div className={styles.grid_wrapper}>
        <Header origin={origin} lang={lang} />
        {children}
        <footer className={`${styles.full_bleed} ${styles.footer_container}`}>
          <div className={styles.footer__top}>
            <div className={styles.footer_mid}>
              <strong>
                Senter for klinisk dokumentasjon og evaluering (SKDE)
              </strong>
              <br />
              Postboks 6
              <br />
              9038 Tromsø
              <br />
              <br />
              <strong>Helse Førde</strong>
              <br />
              Postboks 1000
              <br />
              6807 Førde
            </div>
            <div className={styles.footer_mid}>
              <Link
                href={lang === "en" ? "/en/static/contact" : "/statisk/kontakt"}
              >
                <a title="Link til kontakt">
                  {lang === "en" ? "Contact" : "Kontakt"}
                </a>
              </Link>
              <Link
                href={
                  lang === "en" ? "/en/static/privacy" : "/statisk/personvern"
                }
              >
                <a title="link til personvern">
                  {lang === "en" ? "Privacy" : "Personvern"}
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.footer__bottom}>
            <div className={styles.footer_logos}>
              <Link href="https://helse-nord.no/">
                <a title="Link til Helse Nord">
                  <Image
                    loader={imgLoader}
                    src={`/helseatlas/img/logos/helse-nord-hvit.svg`}
                    height="40px"
                    width="180px"
                    alt="Helse Nord logo"
                  />
                </a>
              </Link>
            </div>
            <div className={styles.footer_logos}>
              <Link href="https://www.skde.no/">
                <a title="Link til SKDE">
                  <Image
                    loader={imgLoader}
                    src={`/helseatlas/img/logos/skde-hvit.svg`}
                    height="40px"
                    width="180px"
                    alt="SKDE logo"
                  />
                </a>
              </Link>
            </div>
            <div className={styles.footer_logos}>
              <Link href="https://helse-forde.no/">
                <a title="Link til Helse Førde">
                  <Image
                    loader={imgLoader}
                    src={`/helseatlas/img/logos/helse-forde-hvit.svg`}
                    height="40px"
                    width="180px"
                    alt="Helse Førde logo"
                  />
                </a>
              </Link>
            </div>
            <div className={styles.footer_logos}>
              <Link href="https://helse-vest.no/">
                <a title="Link til Helse Vest">
                  <Image
                    loader={imgLoader}
                    src={`/helseatlas/img/logos/helse-vest-hvit.svg`}
                    height="40px"
                    width="180px"
                    alt="Helse Vest logo"
                  />
                </a>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
