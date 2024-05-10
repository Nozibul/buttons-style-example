import styles from "./Button21.module.css";

const Button21 = () => {
     return (
          <div>
               <button className={styles.buttons}>
                    <div className={styles.qube}>
                         <div className={styles.front}>now click!</div>
                         <div className={styles.back}>mouse over me!</div>
                    </div>
               </button>
          </div>
     );
};

export default Button21;
