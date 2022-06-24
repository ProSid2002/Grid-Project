import styles from "./FirstCardData.module.css";

const FirstCardData = (props) => {
  return (
    <>
      {props.didChange === true ? (
        <div className={styles["textarea-container"]}>
          <textarea
            value={props.firstCardData}
            onChange={(e) => props.setFirstCardData(e.target.value)}
            onKeyDown={(e) => {
              e.key === "Enter"
                ? props.setDidChange(!props.didChange)
                : props.setDidChange(props.didChange);
            }}
          />
        </div>
      ) : (
        <h2>{props.firstCardData}</h2>
      )}
    </>
  );
};

export default FirstCardData;
