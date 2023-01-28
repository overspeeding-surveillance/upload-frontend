import React from "react";
import styles from "../styles/upload.module.scss";

const Upload = () => {
  return (
    <div className={styles.uploadWrapper}>
      <div className={styles.uploadContainer}>
        <div className={styles.drag}>
          <h1>
            Drag & drop&nbsp;<span className={styles.videos}>videos</span>
          </h1>
          <div>
            or&nbsp;<span className={styles.browse}>browse files </span>&nbsp;on
            your computer
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
