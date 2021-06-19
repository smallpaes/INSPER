import React from 'react';

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

export default Spinner;