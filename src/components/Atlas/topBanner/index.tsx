import style from "./topbanner.module.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface TopBannerProps {
  mainTitle: string;
  pdfUrl: string;
  ia: boolean;
  lang: string;
}

export const TopBanner: React.FC<TopBannerProps> = ({
  mainTitle,
  pdfUrl,
  ia,
  lang,
}) => {
  let frontpage: string;
  let href: string;
  let report_text: string;
  let map_text: string;
  if (lang === "en") {
    report_text = "Report";
    map_text = "Map";
    frontpage = "Front page";
    href = "/helseatlas/en/";
  } else if (lang === "no") {
    report_text = "Rapport";
    map_text = "Kart";
    frontpage = "Forside";
    href = "/helseatlas/";
  }
  return (
    <div className={style.atlasTopBanner}>
      <div className={style.bannerWrapper}>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNextIcon htmlColor="#D3D7DA" />}
        >
          <Link underline="hover" color="#034584" href={href}>
            {frontpage}
          </Link>
          <Link color="text.primary" underline="none">
            {mainTitle}
          </Link>
        </Breadcrumbs>
        <div className={style.rightbanner}>
          {pdfUrl && (
            <div>
              <a href={pdfUrl}>{report_text}</a>
            </div>
          )}
          {ia && (
            <div className={style.map_button}>
              <a href="ia/index.html">{map_text}</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
