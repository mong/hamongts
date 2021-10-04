import style from "./topbanner.module.css";

interface TopBannerProps {
  num: string;
  mainTitle: string;
  shortTitle: string;
  pdfUrl: string;
  ia: boolean;
}

export const TopBanner: React.FC<TopBannerProps> = ({
  mainTitle,
  pdfUrl,
  ia,
}) => {
  return (
    <div className={style.atlasTopBanner}>
      <div className={style.bannerWrapper}>
        <h1>{mainTitle}</h1>
        <div>
          <a href={pdfUrl}>Rapport</a>
        </div>
        {ia && (
          <div>
            <a href="ia/index.html">Kart</a>
          </div>
        )}
      </div>
    </div>
  );
};
