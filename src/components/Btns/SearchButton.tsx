import classNames from "./Buttons.module.css";

export const SearchButton = ({}) => {
  return (
    <button className={classNames.button}>
      <span className={classNames.buttonIconSearch}></span>
      <span className={classNames.buttonText}>Søk</span>
    </button>
  );
};
