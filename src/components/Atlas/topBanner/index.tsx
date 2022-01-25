import style from "./topbanner.module.css";

interface TopBannerProps {
  pdfUrl: string;
  ia: boolean;
  lang: string;
  report_text: string;
  map_text: string;
}

export const TopBanner: React.FC<TopBannerProps> = ({
  pdfUrl,
  ia,
  lang,
  report_text,
  map_text,
}) => {
  if (lang === "en") {
    report_text = "Report";
    map_text = "Map";
  } else if (lang === "no") {
    report_text = "Rapport";
    map_text = "Kart";
  }
  return (
    <div className={style.atlasTopBanner}>
      <div className={style.bannerWrapper}>
        <div>
          <a href={pdfUrl}>{report_text}</a>
        </div>
        {ia && (
          <div>
            <a href="ia/index.html">{map_text}</a>
          </div>
        )}
      </div>
    </div>
  );
};
