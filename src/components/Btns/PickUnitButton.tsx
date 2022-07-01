import classNames from "./Buttons.module.css";

type ButtonProps = {
  lang: "en" | "no";
};

export const PickUnitButton: React.FC<ButtonProps> = ({ lang }) => {
  return (
    <button className={classNames.button}>
      <span className={classNames.buttonText}>
        {lang === "en" ? "Pick Health Unit" : "Velg opptaksområde"}
      </span>
    </button>
  );
};
