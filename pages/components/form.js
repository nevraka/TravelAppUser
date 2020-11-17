import styles from '../../styles/Homescreen.module.css';

function Form() {
  return (
    <>
      <div className={styles.search}>
        <div className={styles.origin}>
          <input type="text" placeholder="Your destination/hotel"></input>
        </div>
        <div className={styles.checkin}>c</div>
        <div className={styles.checkout}>s</div>
        <div className={styles.guest}>s</div>
        <div className={styles.submit}> Find Hotel 🏩</div>
      </div>
      <div className={styles.multisearch}>🧩 Multi-city search</div>
    </>
  );
}

export default Form;
