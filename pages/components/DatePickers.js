import { DatePicker, Space } from 'antd';
import React, { useState } from 'react';
import moment from 'moment';

const { RangePicker } = DatePicker;

function DatePickers() {
  const [dates, setDates] = useState([
    moment().add(1, 'days'),
    moment().add(2, 'days'),
  ]);

  return (
    <div>
      <Space direction="vertical">
        <RangePicker
          placeholder={['Check-in date', 'Check-out date']}
          format="DD/MM/YYYY"
          onChange={setDates}
          value={dates}
        />
      </Space>
    </div>
  );
}

export default DatePickers;
