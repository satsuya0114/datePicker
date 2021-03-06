import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import moment from 'moment';
import { CalendarOutlined } from '@ant-design/icons';
import { INPUT } from './constant';
import './style.less';
import { Page, Tips, Relative, Absolute } from './styledComponent';
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
    setShowCalendar(false);
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
      <Tips>click input will show the calendar</Tips>
      <Tips>press return button in input will set the date </Tips>
      <Relative>
        <Input
          onClick={() => setShowCalendar(true)}
          style={{ width: `${INPUT}px` }}
          placeholder="Enter your username"
          prefix={<CalendarOutlined className="site-form-item-icon" />}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onPressEnter={enterDate}
        />
        { showCalendar && (
          <Absolute>
            <Calendar selectDate={selectDate} onChangeDate={onChangeDate} />
          </Absolute>
        )}
      </Relative>
    </Page>
  );
};

export default CalendarDemo;
