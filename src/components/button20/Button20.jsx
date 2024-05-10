import styles from "./Button20.module.css";

const Button20 = () => {
     return (
          <div>
               <button className={`${styles.btn} ${styles.btn1}`}>Hover Me</button>
               <button className={`${styles.btn} ${styles.btn2}`}>Hover Me</button>
               <button className={`${styles.btn} ${styles.btn3}`}>Hover Me</button>
               <button className={`${styles.btn} ${styles.btn4}`}>Hover Me</button>
          </div>
     );
};

export default Button20;
