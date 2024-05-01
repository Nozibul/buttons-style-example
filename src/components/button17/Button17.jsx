import styles from "./Button17.module.css";

const Button17 = () => {
    return (
      <div className={styles["btn-container"]}>
        <button className={styles["btn-1"]}>
          <span>Hover</span>
        </button>
        <button className={styles["btn-2"]}>
          <span>Hover</span>
        </button>
        <button className={styles["btn-3"]}>
          <span>Click</span>
        </button>
      </div>
    );
  };
  
  export default Button17;
  