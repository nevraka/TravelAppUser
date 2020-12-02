import styles from '../../styles/Homescreen.module.css';
import currencies from './currencies.json';
import { ThemeContext } from '../ThemeContext';
import { useContext, useState } from 'react';
import { Dropdown, Menu } from 'antd';
import { Switch } from 'antd';

function Header() {
  const [theme, setTheme] = useContext(ThemeContext);
  const [currency, setCurrency] = useState('USD');

  const dark = theme === 'dark';

  const toogleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const menu = (
    <Menu>
      {Object.keys(currencies).map((item) => (
        <Menu.Item id={item} onClick={() => setCurrency(item)} key={item}>
          {item} - {currencies[item].name}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className={dark ? styles.containerDark : styles.container}>
      <div className={styles.logo}>WorldWide</div>
      <img className={styles.logoImg} src="/img_1.jpg" alt="" />
      <div className={styles['button-block']}>
        <Switch onChange={toogleTheme}></Switch>
        <Dropdown overlay={menu} trigger={['click']}>
          <div type="default" className={styles['button-currency']}>
            {currency}
          </div>
        </Dropdown>
        <div className={styles['button-custom']}>👤</div>
      </div>
    </div>
  );
}

export default Header;
