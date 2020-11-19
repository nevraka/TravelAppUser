import styles from '../../styles/Homescreen.module.css';
import { Input, Cascader, Button, Divider } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import GuestInputs from './GuestInputs';

function Form() {
  function dropdownRender() {
    return (
      <div style={{ width: '200px' }}>
        <div>
          <GuestInputs />
        </div>
        <Divider style={{ margin: 5 }} />
        <div style={{ padding: 8 }}>Age of children</div>
      </div>
    );
  }

  return (
    <div className={styles.search}>
      <Input placeholder="Your Destination/hotel" className={styles.origin} />
      <Input placeholder="Check-in date " className={styles.checkin} />
      <Input placeholder="Check-out date" className={styles.checkout} />
      <Cascader
        placeholder="Guest"
        bordered={false}
        dropdownRender={dropdownRender}
        className={styles.guest}
      />
      <Button className={styles.submit} icon={<SearchOutlined />}>
        Find Hotel
      </Button>
      <span className={styles.multisearch}>🧩 Multi-city search</span>
    </div>
  );
}

export default Form;
