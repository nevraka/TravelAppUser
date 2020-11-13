import styles from '../../styles/Homescreen.module.css';

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        WorldWide
        <img className={styles.img} src="/img_1.jpg" alt="" />
      </div>
      <div className={styles['button-block']}>
        <div type="checkbox" className={styles['button-toogle']}>
          a
        </div>
        <div className={styles['button-currency']}>USD</div>
        <div className={styles['button-custom']}>👤</div>
      </div>
    </div>
  );
}

export default Header;
