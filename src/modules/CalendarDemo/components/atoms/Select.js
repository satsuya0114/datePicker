import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import { RowGrid, Center } from './styledComponent';

const Select = (props) => {
  const { showMY, clickPrevNext, changeMode } = props;
  return (
    <RowGrid>
      <Center>
        <Button type="link" icon={<LeftOutlined />} size="small" onClick={() => clickPrevNext(0)} />
      </Center>
      <Center>
        <Button type="text" onClick={changeMode}>{showMY}</Button>
      </Center>
      <Center>
        <Button type="link" icon={<RightOutlined />} size="small" onClick={() => clickPrevNext(1)} />
      </Center>
    </RowGrid>
  );
};

Select.propTypes = {
  showMY: PropTypes.string,
  clickPrevNext: PropTypes.func,
  changeMode: PropTypes.func,
};

Select.defaultProps = {
  showMY: '',
  clickPrevNext: () => {},
  changeMode: () => {},
};

export default Select;
