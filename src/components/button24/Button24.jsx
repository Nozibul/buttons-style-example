
import styles from './Button24.module.css'; // Import the CSS module file

const Button24 = () => {
  return (
    <div>
      <nav className={styles.menu}>
        <a className={styles.nav} href="#">
          <div className={styles.icon}>home</div>
          <div className={styles.icon}>
            <i className="fa fa-home"></i>
          </div>
        </a>
        <a className={styles.nav} href="#">
          <div className={styles.icon}>
            <i className="fa fa-cogs"></i>
          </div>
          <div className={styles.icon}>option</div>
        </a>
        <a className={styles.nav} href="#">
          <div className={styles.icon}>
            <i className="fa fa-truck"></i>
          </div>
          <div className={styles.icon}>shipping</div>
        </a>
        <a className={styles.nav} href="#">
          <div className={styles.icon}>galery</div>
          <div className={styles.icon}>
            <i className="fa fa-camera-retro"></i>
          </div>
        </a>
        <a className={styles.nav} href="#">
          <div className={styles.icon}>
            <i className="fa fa-map-marker">Place</i>
          </div>
          <div className={styles.icon}>place</div>
        </a>
        <a className={styles.nav} href="#">
          <div className={styles.icon}>
            <i className="fa fa-rss"></i>
          </div>
          <div className={styles.icon}>Rss</div>
        </a>
      </nav>
    </div>
  );
};

export default Button24;
