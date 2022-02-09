import style from "./orderedlist.module.css";

export const OrderedList = ({ children }) => {
  return <ol className={style.tocList}>{children}</ol>;
};
