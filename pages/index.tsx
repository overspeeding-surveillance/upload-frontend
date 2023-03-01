import React from "react";
import Card from "../components/Card";
import Link from "../components/Link";
import styles from "../styles/index.module.scss";

const App = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>
        Overspeeding&nbsp;
        <span className={styles.textGradient}>Surveillance</span>
      </h1>
      <p className={styles.instructions}>
        Group Members:&nbsp;
        <Link href="https://www.facebook.com/aabhas.dhaubanja/">
          Aabhas Dhaubanja
        </Link>
        , <Link href="https://www.facebook.com/nitesh.krdas.3">Nitesh Das</Link>
        ,<Link href="https://www.facebook.com/pra.tiik.9">Pratik Tamrakar</Link>{" "}
        and
        <Link href="https://www.facebook.com/sanjog.gaihre.5">
          Sanjog Gaihre
        </Link>
      </p>
      <ul role="list" className={styles.linkCardGrid}>
        <Card
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          title="Documentation"
          body="Learn how our project works and explore the code."
        />
        <Card
          href="/upload"
          title="Upload Video"
          body="Upload a video and capture the number plates"
        />
        <Card
          href="/records"
          title="Check Records"
          body="View all of the existing violations of the traffic rule."
        />
        <Card
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          title="Community"
          body="Come say hi to our amazing Discord community. ❤️"
        />
      </ul>
    </main>
  );
};

export default App;
