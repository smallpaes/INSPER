import React from 'react';

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

export default Skeleton;