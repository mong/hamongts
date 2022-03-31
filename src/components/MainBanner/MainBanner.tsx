import Image from "next/image";

import { imgLoader } from "../../helpers/functions";
import classNames from "./MainBanner.module.css";

type MainBannerProps = {
  lang?: "nb" | "nn" | "en";
  title?: string;
  ingress?: string;
  imageSource?: File;
};

export const MainBanner = ({
  lang = "no",
  title = "Likeverdige helsetjenester - uansett hvor du bor?",
  ingress = "Helseatlas sammenlikner befolkningens bruk av helsetjenester gjennom interaktive kart, rapporter og faktaark.",
  imageSource = "/helseatlas/img/frontpage.png",
}) => {
  const engTitle = "Equitable health services – regardless of where you live?";
  const engIngress =
    "The Norwegian healthcare atlases compares the population's use of health services using interactive maps, reports and fact sheets.";
  return (
    <main className={classNames.main}>
      <div className={classNames.headerMain}>
        <div className={classNames.pageImage}>
          <Image
            loader={imgLoader}
            src={imageSource}
            alt={"mainpage photo"}
            width={1220}
            height={514}
          />
          <h1 className={classNames.pageTitle}>
            {lang === "en" ? engTitle : title}
          </h1>
        </div>
      </div>
      <div className={classNames.pageTitle}></div>
      <div className={classNames.pageIngressContent}>
        <div className={classNames.pageIngress}>
          {lang === "en" ? engIngress : ingress}
        </div>
      </div>
    </main>
  );
};
