import styled from 'styled-components';

const square = 40;

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
  width: ${square * 8}px;
  height: ${square * 8}px;
`;

export const Wrapper = styled.div`
  padding: 5px;
  border: solid 1px rgb(195, 195, 195);
`;
