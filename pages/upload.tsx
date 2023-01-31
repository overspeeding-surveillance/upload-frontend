import React from "react";
import styles from "../styles/upload.module.scss";

const Upload = () => {
  const [file, setFile] = React.useState<File>();
  const [] = React.useState();

  const _handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  const _handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setFile(event.dataTransfer.files[0]);
  };

  const _handleBrowse = () => inputRef.current?.click();

  const _handleUpload = () => {
    const formData = new FormData();
    file && formData.append("file", file);
    fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    });
  };

  const _handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.files?.[0] && setFile(event.target.files[0]);
  };

  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className={styles.uploadWrapper}>
      <div className={styles.uploadContainer}>
        <div
          onDragOver={_handleDragOver}
          onDrop={_handleDrop}
          className={styles.drag}
        >
          <h1>
            Drag & drop&nbsp;<span className={styles.videos}>videos</span>
          </h1>
          <div>
            or&nbsp;
            <span onClick={_handleBrowse} className={styles.browse}>
              browse files&nbsp;
            </span>
            &nbsp;on your computer
          </div>
          <input
            onChange={_handleFileChange}
            ref={inputRef}
            type="file"
            hidden
          />
        </div>
        <button onClick={_handleUpload} className={styles.button}>
          Upload
        </button>
      </div>
    </div>
  );
};

export default Upload;
