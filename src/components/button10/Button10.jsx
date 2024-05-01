import { useState } from "react";
import styles from "./Button10.module.css";

const Button10 = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button className={styles.button10} onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </button>
    </>
  );
};

export default Button10;
