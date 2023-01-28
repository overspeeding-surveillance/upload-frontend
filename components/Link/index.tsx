import React from "react";
import styles from "./index.module.scss";

type Props = {
  children: React.ReactNode;
  href: string;
};

const Link = ({ children, href }: Props) => {
  return (
    <a
      className={styles.a}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  );
};

export default Link;
