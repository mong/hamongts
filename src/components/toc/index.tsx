import styles from "./toc.module.css";

export const TableOfContents = ({ children }) => {
  return (
    <div className="table-of-contents">
      <div className={styles.tocWrapper}>
        <nav className={`${styles.toc}`}>{children}</nav>
      </div>
    </div>
  );
};
