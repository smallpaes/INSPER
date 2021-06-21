import React from 'react';
import PropTypes from 'prop-types';

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer { ...props }>{children}</CustomButtonContainer>
);

CustomButton.propTypes = {
  children: PropTypes.node,
  // use transient props when assigning custom component using as attribute
  props: PropTypes.shape({
    isPureButton: PropTypes.bool,
    $isPureButton: PropTypes.bool,
    isOutlineButton: PropTypes.bool,
    $isOutlineButton: PropTypes.bool,
    as: PropTypes.node
  }),
};

export default CustomButton;