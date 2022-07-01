import classNames from "./Buttons.module.css";

type MenuButtonProps = {
  lang: "en" | "no";
  style?: React.CSSProperties;
};

export const MenuButton: React.FC<MenuButtonProps> = ({ lang, style }) => {
  const defaultStyle: React.CSSProperties = {
    marginLeft: "0rem",
  };
  return (
    <button
      className={classNames.button}
      style={{ ...defaultStyle, ...style }}
      data-testid="menuButton"
    >
      <span className={classNames.buttonBurgerIcon}>
        <span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span>
      </span>
      <span className={classNames.buttonText}>
        {lang === "en" ? "MENU" : "MENY"}
      </span>
    </button>
  );
};
