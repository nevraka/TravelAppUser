import { useState } from 'react';
import styles from '../../styles/Homescreen.module.css';
import { Cascader, Button, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import GuestInputs from './GuestInputs';
import DatePickers from './DatePickers';
import countrycitystatejson from 'countrycitystatejson';
import _ from 'lodash';

const { Option } = Select;

const citydb = countrycitystatejson.getAll();

export const search = (s) => {
  let results = [];
  const countryCodes = Object.keys(citydb);
  countryCodes.forEach((cc) => {
    const country = citydb[cc];
    const states = country.states;
    const statesNames = Object.keys(states);
    statesNames.forEach((stateName) => {
      const cities = states[stateName];
      cities.forEach((city) => {
        if (city.name.toLowerCase().includes(s.toLowerCase())) {
          results.push({
            city: city.name,
            country: country.name,
            flag: country.emoji,
          });
        }
      });
    });
  });
  return results;
};

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

  const [destination, setDestination] = useState(null);
  const [filteredCities, setFilteredCities] = useState([]);

  const searchHandler = (s) => {
    if (!s) {
      setFilteredCities([]);
      return;
    }

    setFilteredCities(_.take(search(s), 10));
  };

  return (
    <>
      <div className={styles.search}>
        <div className={styles.selectContainer}>
          <Select
            showSearch
            value={destination}
            placeholder={'London'}
            className={styles.select}
            defaultActiveFirstOption={false}
            showArrow={false}
            filterOption={false}
            onSearch={searchHandler}
            onSelect={setDestination}
            notFoundContent={null}
            bordered={false}
          >
            {filteredCities.map((d, i) => (
              <Option key={i} value={d.city} className={styles.option}>
                {d.city}
                <br />
                {d.flag} <em>{d.country}</em>
              </Option>
            ))}
          </Select>
        </div>
        <DatePickers />
        <Cascader
          placeholder="Guest"
          bordered={false}
          dropdownRender={dropdownRender}
          className={styles.guest}
        />
        <Button className={styles.submit} icon={<SearchOutlined />}>
          Find Hotel
        </Button>
      </div>
      <Button type="link" className={styles.multisearch}>
        🧩 Multi-city search
      </Button>
    </>
  );
}

export default Form;
