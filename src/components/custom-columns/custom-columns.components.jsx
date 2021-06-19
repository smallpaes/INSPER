import React from 'react';
import PropTypes from 'prop-types';

import { CustomColumnsContainer } from './custom-columns.styles';

const CustomColumns = ({ children, ...props }) => {
  return (
    <CustomColumnsContainer { ...props }>
      { children }
    </CustomColumnsContainer>
  );
};

CustomColumns.propTypes = {
  children: PropTypes.node
};

export default CustomColumns;