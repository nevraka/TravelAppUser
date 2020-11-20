import styles from '../../styles/Homescreen.module.css';
import { Input, Cascader, Button, Dropdown } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import GuestInputs from './GuestInputs';
import DatePickers from './DatePickers';

function Form() {
  function dropdownRender() {
    return (
      <div style={{ width: '200px' }}>
        <div>
          <GuestInputs />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.search}>
      <Input placeholder="Your Destination/hotel" className={styles.origin} />
      <DatePickers className={styles.checkin} />
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
