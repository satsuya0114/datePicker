import styled from 'styled-components';
import { DAY } from '../constant';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Relative = styled.div`
  position: relative;
`;

export const Outer = styled.div`
  width: ${DAY * 8}px;
  height: ${DAY * 8}px;
`;

export const Wrapper = styled.div`
  padding: 5px;
  border: solid 1px rgb(195, 195, 195);
`;
