import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { imgLoader } from "../../helpers/functions";
import { useEffect, useState } from "react";

interface Props {
  children: any;
  title?: string;
  page?: string;
}

export default function Layout({
  children,
  title = "Helseatlas",
  page,
}: Props) {
  const [origin, setOrigin] = useState("");
  useEffect(() => {
    setOrigin(window.location.origin);
  }, [setOrigin]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:site_name" content="Helse Nord RHF"></meta>
        <meta
          name="description"
          content="The healthcare atlases on Helseatlas.no are a tool for comparing the population's use of health services in different geographical areas, regardless of where the patients actually receive treatment."
        />
        <link rel="icon" href="/helseatlas/img/logos/favicon.ico" />
      </Head>
      <div className={styles.grid_wrapper}>
        <header className={`${styles.header_container}`}>
          <div className={styles.header_logo}>
            <Link href={`${origin}/helseatlas`}>
              <a rel="home">
                <Image
                  loader={imgLoader}
                  src={`/helseatlas/img/logos/helseatlas.svg`}
                  alt="Hjem"
                  width={298}
                  height={60}
                />
              </a>
            </Link>
          </div>
          <div className={styles.header_links}>
            <Link href="/statisk/kontakt">
              <a>Kontakt</a>
            </Link>
            <Link href="/statisk/om">
              <a>Om oss</a>
            </Link>
          </div>
        </header>
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
              <Link href="/statisk/kontakt">
                <a title="Link til kontakt">Kontakt</a>
              </Link>
              <Link href="/statisk/personvern">
                <a title="link til personvern">Personvern</a>
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
