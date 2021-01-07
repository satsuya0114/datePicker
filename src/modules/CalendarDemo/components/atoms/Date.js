import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { DateGrid, WeekName, DateItem } from './styledComponent';

const Date = (props) => {
  const { selectDate, viewDate, clickDate } = props;
  const [days42, setDays42] = useState([]);
  useEffect(() => {
    // console.log('viewDate change', moment(viewDate).format('YYYY/MM/DD'));
    if (selectDate || viewDate) {
      const fdMonth = moment(viewDate).startOf('month'); // 1/1
      const fdCal = fdMonth.clone().startOf('week'); // 12/27
      const ldMonth = fdMonth.clone().endOf('month'); // 1/31
      const ldCal = ldMonth.clone().endOf('week'); // 2/06
      const tempDate = fdCal.clone();
      const days = [];
      while (tempDate.isBefore(fdMonth)) {
        days.push({
          gray: true,
          date: tempDate.clone(),
        });
        tempDate.add(1, 'day');
      }
      while (tempDate.isBefore(ldMonth) || tempDate.isSame(ldMonth, 'day')) {
        days.push({
          gray: false,
          date: tempDate.clone(),
        });
        tempDate.add(1, 'day');
      }
      while (tempDate.isBefore(ldCal) || tempDate.isSame(ldCal, 'day')) {
        days.push({
          gray: true,
          date: tempDate.clone(),
        });
        tempDate.add(1, 'day');
      }
      setDays42(days);
    }
  }, [selectDate, viewDate]);
  return (
    <DateGrid>
      {moment.weekdaysMin().map((week) => (
        <WeekName key={week}>{week}</WeekName>
      ))}
      {days42.map((dayObj) => (
        <DateItem
          key={moment(dayObj.date).format('x')}
          gray={dayObj.gray}
          today={moment(dayObj.date).isSame(moment(), 'day') && !moment(selectDate).isSame(dayObj.date, 'day')}
          selected={moment(selectDate).isSame(dayObj.date, 'day')}
          onClick={() => clickDate(dayObj.date)}
        >
          {moment(dayObj.date).format('DD')}
        </DateItem>
      ))}
    </DateGrid>
  );
};

Date.propTypes = {
  selectDate: PropTypes.object,
  viewDate: PropTypes.object,
  clickDate: PropTypes.func,
};
Date.defaultProps = {
  selectDate: null,
  viewDate: null,
  clickDate: () => {},
};

export default Date;
