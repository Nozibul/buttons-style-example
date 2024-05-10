import styles from "./Button23.module.css";

const Button23 = () => {
  return (
    <div>
      <ul className={styles.buttonChest}>
        <li>
          <div className={`${styles.buttons} ${styles.navy}`}>Button</div>
          <span className={styles.click}>Click Me</span>
        </li>
        <li>
          <div className={`${styles.buttons} ${styles.red}`}>Button</div>
          <span className={styles.click}>I Rock</span>
        </li>
        <li>
          <div className={`${styles.buttons} ${styles.api}`}>Button</div>
          <span className={styles.click}>Cats Meow</span>
        </li>
        <li>
          <div className={`${styles.buttons} ${styles.chalk}`}>Button</div>
          <span className={styles.click}>Lame</span>
        </li>
        <li>
          <div className={`${styles.buttons} ${styles.drab}`}>Button</div>
          <span className={styles.click}>U.S. Army</span>
        </li>
        <li>
          <div className={`${styles.buttons} ${styles.teal}`}>Button</div>
          <span className={styles.click}>Neat</span>
        </li>
      </ul>
    </div>
  );
};

export default Button23;
