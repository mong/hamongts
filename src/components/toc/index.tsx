import styles from "./toc.module.css";

export const TableOfContents = ({children}) => {
    return (
        <div className={`${styles.toc}`}>
            {children}
        </div>
    );
  };
