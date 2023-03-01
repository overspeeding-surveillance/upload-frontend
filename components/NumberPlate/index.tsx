import React from "react";
import styles from "./index.module.scss";

type Props = {
  characters: string[];
};

const NumberPlate = ({ characters }: Props) => {
  const getCharacters = () => {
    const charArray = [...characters];
    const first = charArray.shift();
    const second = charArray.shift();

    return (
      <div>
        <h1>
          {first}&nbsp;{second}
        </h1>
        <h1>
          {charArray.map((char, id) => (
            <span key={id}>{char}&nbsp;</span>
          ))}
        </h1>
      </div>
    );
  };

  return <div className={styles.numberPlateContainer}>{getCharacters()}</div>;
};

export default NumberPlate;
