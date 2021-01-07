import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Outer, Wrapper } from './styledComponent';
import Select from './atoms/Select';
import YearMonth from './atoms/YearMonth';
import Date from './atoms/Date';
import { getYearRange } from '../commonFunction';

const Calendar = (props) => {
  const { selectDate, onChangeDate } = props;
  const [showMY, setShowMY] = useState('');
  const [viewDate, setViewDate] = useState(null);
  const [yearRange, setYearRange] = useState([]);
  const [selectMode, setSelectMode] = useState('date');

  useEffect(() => {
    // console.log(moment().format('YYYY/MM/DD HH:mm'));
    setShowMY(moment().format('MMM YYYY'));
    setViewDate(moment());
    setYearRange(getYearRange(moment().year()));
  }, []);

  useEffect(() => {
    if (selectDate) {
      setViewDate(selectDate);
    }
  }, [selectDate]);

  useEffect(() => {
    // console.log(viewDate);
    if (viewDate !== null) {
      switch (selectMode) {
        case 'date':
          setShowMY(moment(viewDate).format('MMM YYYY'));
          break;
        case 'month':
          setShowMY(moment(viewDate).format('YYYY'));
          break;
        case 'year': {
          setShowMY(`${yearRange[0]}-${yearRange[9]}`);
          break;
        }
        default:
      }
    }
  }, [selectMode, viewDate, yearRange[0]]);

  useEffect(() => {
    if (viewDate) {
      setYearRange(getYearRange(moment(viewDate).year()));
    }
  }, [viewDate]);

  const clickPrevNext = (value) => {
    if (value === 1) {
      // console.log('click next');
      switch (selectMode) {
        case 'date':
          setViewDate(moment(viewDate).day(1).add(1, 'month'));
          break;
        case 'month':
          setViewDate(moment(viewDate).add(1, 'year'));
          break;
        case 'year':
          setViewDate(moment(viewDate).add(10, 'year'));
          break;
        default:
      }
    } else {
      // console.log('click prev');
      switch (selectMode) {
        case 'date':
          setViewDate(moment(viewDate).day(1).subtract(1, 'month'));
          break;
        case 'month':
          setViewDate(moment(viewDate).subtract(1, 'year'));
          break;
        case 'year':
          setViewDate(moment(viewDate).subtract(10, 'year'));
          break;
        default:
      }
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

  const onClickMonth = (month) => {
    setViewDate(moment(viewDate).month(month));
    setSelectMode('date');
  };

  const onClickYear = (year) => {
    setViewDate(moment(viewDate).year(year));
    setSelectMode('month');
  };

  return (
    <Wrapper>
      <Outer>
        <Select clickPrevNext={clickPrevNext} changeMode={changeMode} showMY={showMY} />
        {
          selectMode === 'date'
            ? <Date viewDate={viewDate} selectDate={selectDate} clickDate={onChangeDate} />
            : (
              <YearMonth
                selectDate={selectDate}
                mode={selectMode}
                yearRange={yearRange}
                viewDate={viewDate}
                onClickMonth={onClickMonth}
                onClickYear={onClickYear}
              />
            )
        }
      </Outer>
    </Wrapper>
  );
};

Calendar.propTypes = {
  selectDate: PropTypes.object,
  onChangeDate: PropTypes.func,
};
Calendar.defaultProps = {
  selectDate: null,
  onChangeDate: () => {},
};

export default Calendar;
