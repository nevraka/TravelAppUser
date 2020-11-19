import styles from '../styles/Homescreen.module.css';
import { ThemeProvider } from './ThemeContext';
import Header from './components/Header';
import Form from './components/Form';

function Homescreen() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <div className={styles['header-title']}>
          <h1 className={styles.banner}>Search for cheap hotels</h1>
          <div className={styles.minibanner}>
            The best way to buy cheap hotels
          </div>
          <div className={styles['active-hotel']}>
            <span>HOTELS</span>
          </div>
        </div>
        <Form />
      </ThemeProvider>
    </>
  );
}

export default Homescreen;
