import styles from "./Button22.module.css";

const Button22 = () => {
  return (
    <div>
      <div className={`${styles.square} ${styles.shape}`}>
        <span className={styles.text}>Square</span>
      </div>

      <div className={`${styles.circle} ${styles.shape}`}>
        <span className={styles.text}>Circle</span>
      </div>
    </div>
  );
};

export default Button22;
