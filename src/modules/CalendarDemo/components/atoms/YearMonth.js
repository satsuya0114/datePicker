import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { YearMonthGrid, Center, YearMonthItem } from './styledComponent';

const YearMonth = (props) => {
  const { mode, selectDate } = props;
  useEffect(() => {
    console.log(selectDate);
  }, [selectDate]);
  return (
    <YearMonthGrid>
      {moment.monthsShort().map((month) => (
        <Center>
          <YearMonthItem selected={month === moment(selectDate).format('MMM')}>
            {month}
          </YearMonthItem>
        </Center>
      ))}
    </YearMonthGrid>
  );
};

YearMonth.propTypes = {
  mode: PropTypes.string,
  selectDate: PropTypes.object,
};
YearMonth.defaultProps = {
  mode: '',
  selectDate: null,
};

export default YearMonth;
