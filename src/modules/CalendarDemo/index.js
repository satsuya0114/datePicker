import React, { useState } from 'react';
import { Input } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import './style.less';
import { Page, Relative, Absolute } from './styledComponent';
import Calendar from './components/Calendar';

const CalendarDemo = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  return (
    <Page>
      <Relative>
        <Input
          onBlur={() => setShowCalendar(false)}
          onClick={() => setShowCalendar(true)}
          style={{ width: '150px' }}
          placeholder="Enter your username"
          prefix={<CalendarOutlined className="site-form-item-icon" />}
        />
        { true && (
          <Absolute>
            <Calendar />
          </Absolute>
        )}
      </Relative>
    </Page>
  );
};

export default CalendarDemo;
