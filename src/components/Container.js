import Card from "./Card";
import data from "../data/data";
import styles from "./Container.module.css";

const Container = () => {
  return (
    <div className={styles["grid-container"]}>
      {data.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          content={item.content}
          icon={item.icon}
          index={index}
          firstCardData={item.firstCardData}
        />
      ))}
    </div>
  );
};

export default Container;
