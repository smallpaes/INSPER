import React from 'react';

import { CustomColumnsContainer } from './custom-columns.styles';

const CustomColumns = ({ children, ...props }) => {
  return (
    <CustomColumnsContainer { ...props }>
      { children }
    </CustomColumnsContainer>
  );
};

export default CustomColumns;