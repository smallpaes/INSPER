import React from 'react';
import PropTypes from 'prop-types';

import { SkeletonContainer } from './Skeleton.styles';

const Skeleton = ({
  type = 'text',
  width,
  height,
  ratio,
  style,
  animation
}) => (
  <SkeletonContainer
    type={type}
    width={width}
    height={height}
    ratio={ratio}
    style={style}
    animation={animation}
  />
);

Skeleton.propTypes = {
  type: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  ratio: PropTypes.string,
  style: PropTypes.object,
  animation: PropTypes.string
};

Skeleton.defaultProps = {
  type: 'text'
};

export default Skeleton;