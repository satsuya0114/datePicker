import styled from 'styled-components';
// import imgDefault from '~assets/images/imgDefault.jpeg';

export const RowGrid = styled.div`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const YearMonthGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: 80px;
`;

export const YearMonthItem = styled.div`
  cursor: pointer;
  background-color: ${({ selected }) => selected ? 'rgb(219, 61, 68)' : 'transparent'};
  padding: 15px;
  border-radius: 100%;
  color: ${({ selected }) => selected ? '#fff' : '#000'};
`;
