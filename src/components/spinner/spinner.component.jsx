import React from 'react';
import PropTypes from 'prop-types';

import {
  SpinnerOverlay,
  SpinnerContainer
} from './spinner.styles';

const Spinner = ({
  size = 50,
  overlayHeight = 'auto'
}) => (
  <SpinnerOverlay height={overlayHeight}>
    <SpinnerContainer size={size} />
  </SpinnerOverlay>
);

Spinner.propTypes = {
  size: PropTypes.number,
  overlayHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
};

Spinner.defaultProps = {
  size: 50,
  overlayHeight: 'auto'
};

export default Spinner;