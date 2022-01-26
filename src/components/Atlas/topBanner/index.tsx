import style from "./topbanner.module.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Stack from "@mui/material/Stack";

interface TopBannerProps {
  mainTitle: string;
  pdfUrl: string;
  ia: boolean;
  lang: string;
  report_text: string;
  map_text: string;
}

export const TopBanner: React.FC<TopBannerProps> = ({
  mainTitle,
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
        <Stack spacing="">
          <div className={style.breadcrumb}>
            <Breadcrumbs
              aria-label="breadcrumb"
              separator={<NavigateNextIcon htmlColor="#D3D7DA" />}
            >
              <Link underline="hover" color="#034584" href="/helseatlas/">
                Forside
              </Link>
              <Typography color="text.primary">{mainTitle}</Typography>
            </Breadcrumbs>
          </div>
          <div className={style.heading}>
            <h1>{mainTitle}</h1>
          </div>
        </Stack>
      </div>
    </div>
  );
};
