import styled from 'styled-components';

const square = 40;

export const RowGrid = styled.div`
  width: 100%;
  height: ${square}px;
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
  grid-auto-rows: ${square}px;
`;

export const WeekName = styled(Center)`
  font-weight: 600;
`;

export const DateItem = styled(Center)`
  cursor: pointer;
  width: ${square}px;
  height: ${square}px;
  background-color: ${({ selected }) => selected ? 'rgb(219, 61, 68)' : 'transparent'};
  border-radius: 100%;
  color: ${({ selected }) => selected ? '#fff' : '#000'};
  color: ${({ gray }) => gray && '#eee'}
`;

export const YearMonthGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: ${(square * 8 - 40) / 3}px;
`;

export const YearMonthItem = styled(Center)`
  cursor: pointer;
  width: ${square + 10}px;
  height: ${square + 10}px;
  background-color: ${({ selected }) => selected ? 'rgb(219, 61, 68)' : 'transparent'};
  border-radius: 100%;
  color: ${({ selected }) => selected ? '#fff' : '#000'};
  color: ${({ gray }) => gray && '#eee'}
`;
