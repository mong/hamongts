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
            <div>
              <Image
                loader={imgLoader}
                src={`/helseatlas/img/logos/SKDE_hvit_lys.png`}
                height="40"
                width="99"
                alt="SKDE logo"
                priority={true}
              />
            </div>
            <div>
              <strong>Telefon: </strong>
              <a href="tel:77 75 58 00">77 75 58 00</a>
              <br />
              <strong>E-post: </strong>
              <Link href="mailto:postmottak@helse-nord.no">
                <a>postmottak@helse-nord.no</a>
              </Link>
              <br />
              <strong>Webredaktør: </strong>
              <Link href="mailto:barthold.vonen@helse-nord.no">
                <a>Barthold Vonen</a>
              </Link>
            </div>
            <div className={styles.footer__social}>
              <Link href="https://helse-nord.no/skde/kontakt-skde">
                <a title="Link til kontakt SKDE">Kontakt</a>
              </Link>
              <Link href={`${origin}/personvern`}>
                <a title="link til personvern">Personvern</a>
              </Link>
            </div>
          </div>
          <div className={styles.footer__bottom}>
            <div className={styles.footer__partner_l}>
              <Link href="http://www.helse-nord.no/">
                <a title="Link til Helse Nord">
                  <Image
                    loader={imgLoader}
                    src={`/helseatlas/img/logos/hf_nord-white.svg`}
                    height="40px"
                    width="180px"
                    alt="Helse Nord logo"
                  />
                </a>
              </Link>
            </div>
            <div className={styles.footer__partner_m}>
              <Link href="https://www.kvalitetsregistre.no/">
                <a title="Link til Kvalitetsregistre">
                  <Image
                    loader={imgLoader}
                    src={`/helseatlas/img/logos/NSM_logo_hvit.png`}
                    height="40px"
                    width="359px"
                    alt="NSM logo"
                  />
                </a>
              </Link>
            </div>
            <div className={styles.footer_partner_r}>
              <Link href="/">
                <a title="Link til Helseatlas">
                  <Image
                    loader={imgLoader}
                    src={`/helseatlas/img/logos/Logo_atlas_hvit.png`}
                    height="40px"
                    width="146px"
                    alt="Helseatlas logo"
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
