import styles from '../../styles/Homescreen.module.css';

function Form() {
  return (
    <div className={styles.search}>
      <div className={styles.origin}>a</div>
      <div className={styles.destination}>b</div>
      <div className={styles.dates}>c</div>
      <div className={styles.passengers}>s</div>
      <div className={styles.submit}>ç</div>
    </div>
  );
}

export default Form;
