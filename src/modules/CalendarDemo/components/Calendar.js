import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Outer } from './styledComponent';
import Select from './atoms/Select';
import YearMonth from './atoms/YearMonth';
import { getYearRange } from '../commonFunction';

const Calendar = () => {
  const [showMY, setShowMY] = useState('');
  const [selectDate, setSelectDate] = useState(null);
  const [selectMode, setSelectMode] = useState('date');

  useEffect(() => {
    console.log(moment().format('YYYY/MM/DD HH:mm'));
    setShowMY(moment().format('MMM YYYY'));
    setSelectDate(moment());
  }, []);

  useEffect(() => {
    if (selectDate !== null) {
      switch (selectMode) {
        case 'date':
          setShowMY(moment(selectDate).format('MMM YYYY'));
          break;
        case 'month':
          setShowMY(moment(selectDate).format('YYYY'));
          break;
        case 'year': {
          const yearRange = getYearRange(parseInt(moment(selectDate).format('YYYY'), 10));
          setShowMY(`${yearRange[0]}-${yearRange[9]}`);
          break;
        }
        default:
      }
    }
  }, [selectMode]);

  const clickPrevNext = (value) => {
    if (value === 1) {
      console.log('click next');
    } else {
      console.log('click prev');
    }
  };

  const changeMode = () => {
    setSelectMode((prevMode) => {
      let mode = 'date';
      switch (prevMode) {
        case 'date':
          mode = 'month';
          break;
        case 'month':
          mode = 'year';
          break;
        default:
      }
      return mode;
    });
  };

  return (
    <Outer>
      <Select clickPrevNext={clickPrevNext} changeMode={changeMode} showMY={showMY} />
      {
        selectMode === 'date'
          ? <div>date</div>
          : <YearMonth selectDate={selectDate} mode={selectMode} />
      }
    </Outer>
  );
};

export default Calendar;
