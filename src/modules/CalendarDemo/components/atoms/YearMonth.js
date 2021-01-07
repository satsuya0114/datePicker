import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { YearMonthGrid, Center, YearMonthItem } from './styledComponent';

const YearMonth = (props) => {
  const { mode, selectDate, yearRange, viewDate } = props;
  const [showYearRange, setShowYearRange] = useState([]);
  useEffect(() => {
    console.log(selectDate);
  }, [selectDate]);
  useEffect(() => {
    if (yearRange.length) {
      setShowYearRange([yearRange[0] - 1, ...yearRange, yearRange[9] + 1]);
    }
  }, [yearRange]);
  return (
    <YearMonthGrid>
      {
        mode === 'month'
          ? moment.monthsShort().map((month) => (
            <Center>
              <YearMonthItem
                selected={month === moment(selectDate).format('MMM')
                && moment(selectDate).format('YYYY') === moment(viewDate).format('YYYY')}
                thisYM={moment().isSame(viewDate, 'year') && month === moment().format('MMM')
                && !moment(selectDate).isSame(moment(), 'month')}
              >
                {month}
              </YearMonthItem>
            </Center>
          ))
          : showYearRange.map((year, index) => (
            <Center>
              <YearMonthItem
                gray={index === 0 || index === 11}
                selected={year === parseInt(moment(selectDate).format('YYYY'), 10)}
                thisYM={year === parseInt(moment().format('YYYY'), 10)
                && year !== parseInt(moment(selectDate).format('YYYY'), 10)}
              >
                {year}
              </YearMonthItem>
            </Center>
          ))
      }
    </YearMonthGrid>
  );
};

YearMonth.propTypes = {
  mode: PropTypes.string,
  selectDate: PropTypes.object,
  viewDate: PropTypes.object,
  yearRange: PropTypes.array,
};
YearMonth.defaultProps = {
  mode: '',
  selectDate: null,
  viewDate: null,
  yearRange: [],
};

export default YearMonth;
