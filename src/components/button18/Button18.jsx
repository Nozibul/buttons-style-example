import styles from "./Button18.module.css";

const Button18 = () => {
    return (
      <div>
          <button className={styles["btn-pill"]}>
            <span>Pill</span>
          </button>
          <button className={styles["btn-shine"]}>
            <span>Shine</span>
          </button>
          <button className={styles["btn-slide-line"]}>
            <span>Slide Line</span>
          </button>
          <button className={`${styles["btn-slide-line"]} ${styles.center}`}>
            <span>Line Center</span>
          </button>
      </div>
    );
  };
  
  export default Button18;
  