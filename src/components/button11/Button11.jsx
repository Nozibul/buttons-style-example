import styles from "./Button11.module.css"; // Import the CSS module

const Button11 = () => {
  return (
    <div>
      <div className={styles.buttons}> {/* Use the class name from the imported styles object */}
        <button className={`${styles["btn-hover"]} ${styles["color-1"]}`}>BUTTON</button> {/* Use template literals to combine multiple class names */}
        <button className={`${styles["btn-hover"]} ${styles["color-2"]}`}>BUTTON</button>
        <button className={`${styles["btn-hover"]} ${styles["color-3"]}`}>BUTTON</button>
        <button className={`${styles["btn-hover"]} ${styles["color-4"]}`}>BUTTON</button>
        <button className={`${styles["btn-hover"]} ${styles["color-5"]}`}>BUTTON</button>
        <button className={`${styles["btn-hover"]} ${styles["color-6"]}`}>BUTTON</button>
        <button className={`${styles["btn-hover"]} ${styles["color-7"]}`}>BUTTON</button>
        <button className={`${styles["btn-hover"]} ${styles["color-8"]}`}>BUTTON</button>
        <button className={`${styles["btn-hover"]} ${styles["color-9"]}`}>BUTTON</button>
        <button className={`${styles["btn-hover"]} ${styles["color-10"]}`}>BUTTON</button>
        <button className={`${styles["btn-hover"]} ${styles["color-11"]}`}>BUTTON</button>
      </div>
    </div>
  );
};

export default Button11;
