import Image from "next/image";

import { imgLoader } from "../../helpers/functions";
import classNames from "./MainBanner.module.css";

type MainBannerProps = {
  lang?: "nb" | "nn" | "en";
  title?: string;
  ingress?: string;
  imageSource?: string;
};

export const MainBanner: React.FC<MainBannerProps> = ({
  lang = "no",
  title = "Likeverdige helsetjenester - uansett hvor du bor?",
  ingress = "I Norge er det et mål at hele befolkningen skal ha et likeverdig tilbud av helsetjenester på tvers av geografi og sosiale grupper. Helseatlas er et verktøy for å sammenlikne befolkningens bruk av helsetjenester i forskjellige geografiske områder, uavhengig av hvilket sted pasientene behandles.",
  imageSource = "/helseatlas/img/frontpage.jpg",
}) => {
  const engTitle = "Equitable health services – regardless of where you live?";
  const engIngress =
    "The Norwegian healthcare atlases compares the population's use of health services using interactive maps, reports and fact sheets.";
  return (
    <div className={classNames.main}>
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
    </div>
  );
};
