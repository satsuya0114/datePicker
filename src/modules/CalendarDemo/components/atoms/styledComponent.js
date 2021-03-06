import styled from 'styled-components';
import { DAY } from '../../constant';

export const RowGrid = styled.div`
  width: 100%;
  height: ${DAY}px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DateGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: ${DAY}px;
`;

export const WeekName = styled(Center)`
  font-weight: 600;
`;

export const DateItem = styled(Center)`
  cursor: pointer;
  width: ${DAY}px;
  height: ${DAY}px;
  background-color: ${({ selected }) => selected ? 'rgb(219, 61, 68)' : 'transparent'};
  border-radius: 100%;
  color: ${({ selected }) => selected ? '#fff' : '#000'};
  color: ${({ gray }) => gray && '#eee'};
  color: ${({ today }) => today && 'rgb(219, 61, 68)'};
`;

export const YearMonthGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: ${(DAY * 8 - 40) / 3}px;
`;

export const YearMonthItem = styled(Center)`
  cursor: pointer;
  width: ${DAY + 10}px;
  height: ${DAY + 10}px;
  background-color: ${({ selected }) => selected ? 'rgb(219, 61, 68)' : 'transparent'};
  border-radius: 100%;
  color: ${({ selected }) => selected ? '#fff' : '#000'};
  color: ${({ gray }) => gray && '#eee'};
  color: ${({ thisYM }) => thisYM && 'rgb(219, 61, 68)'};
`;
