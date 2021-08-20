import AtlasCard from "./atlascard";
import style from "./topbanner.module.css";

interface TopBannerProps {
  date: string;
  mainTitle: string;
  shortTitle: string;
  pdfUrl: string;
}

export const TopBanner: React.FC<TopBannerProps> = ({ mainTitle, pdfUrl }) => {
  return (
    <div className={style.atlasTopBanner}>
      <div className={style.bannerWrapper}>
        <h1>{mainTitle}</h1>
        <div>
          <a href={pdfUrl}>Rapport</a>
        </div>
      </div>
    </div>
  );
};
