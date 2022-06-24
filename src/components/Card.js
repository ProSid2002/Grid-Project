import { useState } from "react";
import FirstCardData from "./FirstCardData";
import styles from "./Card.module.css";

const Card = (props) => {
  const [didChange, setDidChange] = useState(false);
  const [firstCardData, setFirstCardData] = useState(props.firstCardData);

  return (
    <>
      {props.index === 0 ? (
        <div className={`${styles["grid-item"]} ${styles["grid-item-1"]}`}>
          <img
            className={styles["edit-icon"]}
            src="/edit.svg"
            alt="Edit Icon"
            onClick={() => setDidChange(!didChange)}
          />
          <FirstCardData
            firstCardData={firstCardData}
            didChange={didChange}
            setFirstCardData={setFirstCardData}
            setDidChange={setDidChange}
          />
        </div>
      ) : (
        <div className={styles["grid-item"]}>
          <img className={styles.icon} src={props.icon} alt="Icon" />
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <a href="/">
            Get Started{" "}
            <img
              className={styles.arrow}
              src="/right-arrow.svg"
              alt="Right Arrow"
            />
          </a>
        </div>
      )}
    </>
  );
};

export default Card;
