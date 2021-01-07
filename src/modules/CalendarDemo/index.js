import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import moment from 'moment';
import { CalendarOutlined } from '@ant-design/icons';
import './style.less';
import { Page, Relative, Absolute } from './styledComponent';
import Calendar from './components/Calendar';

const CalendarDemo = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectDate, setSelectDate] = useState(null);
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    setSelectDate(moment());
  }, []);
  useEffect(() => {
    if (selectDate) {
      setInputValue(moment(selectDate).format('YYYY-MM-DD'));
    }
  }, [selectDate]);
  const onChangeDate = (date) => {
    setSelectDate(moment(date));
  };
  const enterDate = () => {
    if (moment(inputValue).isValid()) {
      setSelectDate(moment(inputValue));
    } else {
      setInputValue(moment(selectDate).format('YYYY-MM-DD'));
    }
  };
  return (
    <Page>
      <Relative>
        <Input
          onBlur={() => setShowCalendar(false)}
          onClick={() => setShowCalendar(true)}
          style={{ width: '150px' }}
          placeholder="Enter your username"
          prefix={<CalendarOutlined className="site-form-item-icon" />}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onPressEnter={enterDate}
        />
        { true && (
          <Absolute>
            <Calendar selectDate={selectDate} onChangeDate={onChangeDate} />
          </Absolute>
        )}
      </Relative>
    </Page>
  );
};

export default CalendarDemo;
