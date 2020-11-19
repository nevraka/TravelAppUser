import React, { useState } from 'react';
import { Button } from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';

function GuestInputs() {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

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
      <div style={{ display: 'flex', flexDirection: 'row', padding: '10px' }}>
        <div>Adults</div>
        <div style={{ marginLeft: 'auto' }}>
          <Button
            type="primary"
            shape="circle"
            icon={<PlusCircleOutlined />}
            onClick={handleIncrementAdults}
          />
          {adults}
          <Button
            type="primary"
            shape="circle"
            icon={<MinusCircleOutlined />}
            onClick={handleDecrementAdults}
          />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', padding: '10px' }}>
        <div>Children</div>
        <div style={{ marginLeft: 'auto' }}>
          <Button
            type="primary"
            shape="circle"
            icon={<PlusCircleOutlined />}
            onClick={handleIncrementChildren}
          />
          {children}
          <Button
            type="primary"
            shape="circle"
            icon={<MinusCircleOutlined />}
            onClick={handleDecrementChildren}
          />
        </div>
      </div>
    </>
  );
}

export default GuestInputs;
