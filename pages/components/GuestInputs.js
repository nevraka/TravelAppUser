import React, { useState } from 'react';
import styles from '../../styles/Homescreen.module.css';
import { Button, Divider, Select } from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';

const { Option } = Select;

const MAX_ADULTS = 10;
const MAX_CHILDREN = 5;
const MAX_PASSENGERS = 12;

function GuestInputs() {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [childrenAge, setChildrenAge] = useState('0');

  const handleIncrementAdults = () => {
    setAdults(adults + 1);
  };

  const handleDecrementAdults = () => {
    setAdults(adults - 1);
  };

  const handleIncrementChildren = () => {
    setChildren(children + 1);
  };

  const handleDecrementChildren = () => {
    setChildren(children - 1);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: '10px',
          alignItems: 'center',
        }}
      >
        <div style={{ fontWeight: 'bold' }}>Adults</div>
        <div style={{ marginLeft: 'auto' }}>
          <Button
            type="primary"
            shape="circle"
            icon={<MinusCircleOutlined />}
            disabled={adults < 1}
            onClick={handleDecrementAdults}
            style={{ marginRight: '8px' }}
          />
          {adults}
          <Button
            type="primary"
            shape="circle"
            icon={<PlusCircleOutlined />}
            disabled={
              adults >= MAX_ADULTS || adults + children >= MAX_PASSENGERS
            }
            onClick={handleIncrementAdults}
            style={{ marginLeft: '8px' }}
          />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: '10px',
          alignItems: 'center',
        }}
      >
        <div style={{ fontWeight: 'bold' }}>Children</div>
        <div style={{ marginLeft: 'auto' }}>
          <Button
            type="primary"
            shape="circle"
            icon={<MinusCircleOutlined />}
            disabled={children < 1}
            onClick={handleDecrementChildren}
            style={{ marginRight: '8px' }}
          />
          {children}
          <Button
            type="primary"
            shape="circle"
            icon={<PlusCircleOutlined />}
            disabled={
              children >= MAX_CHILDREN || adults + children >= MAX_PASSENGERS
            }
            onClick={handleIncrementChildren}
            style={{ marginLeft: '8px' }}
          />
        </div>
      </div>
      {children > 0 && (
        <div>
          <Divider style={{ margin: 5 }} />
          <div style={{ paddingTop: 8, paddingLeft: 8 }}>
            Age of children
            <Select
              value={childrenAge}
              bordered={false}
              onChange={(value) => setChildrenAge(value)}
            >
              <Option value="0" key="0">
                0 years
              </Option>
              <Option value="1" key="1">
                1 year
              </Option>
              <Option value="2" key="2">
                2 years
              </Option>
              <Option value="3" key="3">
                3 years
              </Option>
              <Option value="4" key="4">
                4 years
              </Option>
              <Option value="5" key="5">
                5 years
              </Option>
              <Option value="6" key="6">
                6 years
              </Option>
              <Option value="7" key="7">
                7 years
              </Option>
              <Option value="8" key="8">
                8 years
              </Option>
              <Option value="9" key="9">
                9 years
              </Option>
              <Option value="10" key="10">
                10 years
              </Option>
            </Select>
          </div>
        </div>
      )}
    </>
  );
}

export default GuestInputs;
