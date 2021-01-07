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
    console.log(moment().format('YYYY/MM/DD HH:mm'));
    setShowMY(moment().format('MMM YYYY'));
    setViewDate(moment());
    setYearRange(getYearRange(parseInt(moment().format('YYYY'), 10)));
  }, []);

  useEffect(() => {
    if (selectDate) {
      setViewDate(selectDate);
    }
  }, [selectDate]);

  useEffect(() => {
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
  }, [selectMode, viewDate]);

  useEffect(() => {
    if (viewDate) {
      setYearRange(getYearRange(parseInt(moment(viewDate).format('YYYY'), 10)));
    }
  }, [viewDate]);

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

  const clickDate = (date) => {
    console.log(moment(date).format('YYYY/MM/DD'));
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
