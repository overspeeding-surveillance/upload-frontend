import NumberPlate from "@/components/NumberPlate";
import React from "react";
import styles from "../styles/records.module.scss";
import { uniqBy } from "lodash-es";

const Records = () => {
  const [detections, setDetections] = React.useState<Array<any>>([]);

  React.useEffect(() => {
    setInterval(() => {
      fetch("http://localhost:5000/detections")
        .then((res) => res.json())
        .then((res) => {
          const uniqueDetections: Array<any> = uniqBy(res, "number");
          setDetections(uniqueDetections);
        });
    }, 1000);
  }, []);

  const devDetections = React.useMemo(
    () =>
      detections.map(({ id, number }) => {
        let devNumber: string = number;
        devNumber = devNumber.replace(/CA/g, "च");
        devNumber = devNumber.replace(/PA/g, "प");
        devNumber = devNumber.replace(/BA/g, "बा");
        devNumber = devNumber.replace(/1/g, "१");
        devNumber = devNumber.replace(/2/g, "२");
        devNumber = devNumber.replace(/3/g, "३");
        devNumber = devNumber.replace(/4/g, "४");
        devNumber = devNumber.replace(/5/g, "५");
        devNumber = devNumber.replace(/6/g, "६");
        devNumber = devNumber.replace(/7/g, "७");
        devNumber = devNumber.replace(/8/g, "८");
        devNumber = devNumber.replace(/9/g, "९");
        return { id, number: devNumber };
      }),
    [detections]
  );

  return (
    <div className={styles.wrapper}>
      {devDetections.map(({ id, number }) => {
        const characters = number.split(" ");
        const modifiedCharacters = characters.filter((char) => char !== "");

        return modifiedCharacters.length < 7 ? null : (
          <NumberPlate key={id} characters={modifiedCharacters} />
        );
      })}
    </div>
  );
};

export default Records;
