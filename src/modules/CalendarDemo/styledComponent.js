import styled from 'styled-components';
import { DAY, INPUT } from './constant';

export const Page = styled.div`
  display: flex;
  padding: 30px 0;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const Tips = styled.div`
  font-size: 10px;
  color: gray;
`;

export const Relative = styled.div`
  padding: 20px 0;
  position: relative;
`;

export const Absolute = styled.div`
  position: absolute;
  left: -${((DAY * 8 + 12) - INPUT) / 2}px;
`;
