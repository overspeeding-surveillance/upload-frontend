import React from "react";
import styles from "./index.module.scss";

type Props = {
  href: string;
  title: string;
  body: React.ReactNode;
};

const Card = ({ href, title, body }: Props) => {
  return (
    <li className={styles.linkCard}>
      <a target="_black" rel="noopener noreferrer" href={href}>
        <h2 className={styles.h2}>
          {title}
          <span>&rarr;</span>
        </h2>
        <p className={styles.p}>{body}</p>
      </a>
    </li>
  );
};

export default Card;
