import styled from 'styled-components';
// import imgDefault from '~assets/images/imgDefault.jpeg';

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

export const Absolute = styled.div`
  position: absolute;
`;

export const ToolbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TopTool = styled.div`
  display: flex;
  align-items: center;
  color: #000;
  font-size: 12px;
`;

export const TopToolIcon = styled.img`
  width: 12px;
  margin-right: 2px;
`;

export const ImageProfile = styled.div`
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-image: ${({ imgUrl }) => `linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url(${imgUrl ?? imgDefault})`}; */
  color: #fff;
  padding: 10px 20px;
  display: grid;
  grid-template-rows: 3fr 4fr;
`;

export const CenterDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const CenterField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NameField = styled(CenterDiv)`
  justify-content: space-between;
`;

export const Name = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

export const ContextWrapper = styled.div`
  min-height: 100px;
  max-height: 200px;
  padding: 5px 10px 10px 10px;
`;

export const Context = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

const Tag = styled.span`
  border-radius: 5px;
  padding: 2px 4px;
  margin-right: 5px;
  margin-bottom: 5px;
  display: inline-block;
`;

export const BlueTag = styled(Tag)`
  background: rgb(198, 212, 232);
  color: rgb(105, 137, 197);
`;

export const RedTag = styled(Tag)`
  background: rgb(254, 210, 200);
  color: rgb(248, 159, 139);
`;

export const YellowTag = styled(Tag)`
  background: rgb(254, 238, 182);
  color: rgb(208, 173, 64);
`;

export const VideoField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
