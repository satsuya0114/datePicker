import styled from 'styled-components';
// import imgDefault from '~assets/images/imgDefault.jpeg';

export const Page = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const Relative = styled.div`
  padding: 20px 0;
  position: relative;
`;

export const Absolute = styled.div`
  position: absolute;
  left: -${(332 - 150) / 2}px;
`;
