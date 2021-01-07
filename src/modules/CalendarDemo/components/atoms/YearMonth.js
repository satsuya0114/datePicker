import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { YearMonthGrid, Center, YearMonthItem } from './styledComponent';

const YearMonth = (props) => {
  const { mode, selectDate, yearRange, viewDate, onClickMonth, onClickYear } = props;
  const [showYearRange, setShowYearRange] = useState([]);
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
            <Center key={month}>
              <YearMonthItem
                selected={month === moment(selectDate).format('MMM')
                && moment(selectDate).year() === moment(viewDate).year()}
                thisYM={moment().isSame(viewDate, 'year') && month === moment().format('MMM')
                && !moment(selectDate).isSame(moment(), 'month')}
                onClick={() => onClickMonth(month)}
              >
                {month}
              </YearMonthItem>
            </Center>
          ))
          : showYearRange.map((year, index) => (
            <Center key={year}>
              <YearMonthItem
                gray={index === 0 || index === 11}
                selected={year === moment(selectDate).year()}
                thisYM={year === moment().year()
                && year !== moment(selectDate).year()}
                onClick={() => onClickYear(year)}
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
  onClickMonth: PropTypes.func,
  onClickYear: PropTypes.func,
};
YearMonth.defaultProps = {
  mode: '',
  selectDate: null,
  viewDate: null,
  yearRange: [],
  onClickMonth: () => {},
  onClickYear: () => {},
};

export default YearMonth;
