import styled, { css, keyframes } from 'styled-components';

const rectStyles = css`
  width: ${({ width }) => width ? width : '100%'};
  height: ${({ height, ratio }) => ratio ? '0' : height ? height : '120px'};
  padding-bottom: ${({ ratio }) => ratio ? ratio : '0'};
`;

const textStyles = css`
  width: ${({ width }) => width ? width : '100%'};
  height: ${({ height }) => height ? height : '12px'};
  border-radius: var(--theme-border-radius-base);
`;

const circleStyles = css`
  width: ${({ width }) => width ? width : '200px'};
  height: ${({ height }) => height ? height : '200px'};
  border-radius: var(--theme-border-radius-circle);
`;

const animationBaseStyles = css`
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
  }
`;

const wave = keyframes`
  100% { transform: translateX(100%); }
`;

const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
`;

const waveStyles = css`
  ${animationBaseStyles}
  &::after {
    background-image: linear-gradient(
      90deg,
      transparent,
      var(--theme-color-dark-100),
      transparent
    );
    transform: translateX(-100%);
    animation: ${wave} 1.5s infinite;
  }
`;

const pulseStyles = css`
  ${animationBaseStyles}
  &::after {
    background-color: var(--theme-color-dark-100);
    animation: ${pulse} 1.5s infinite;
  }
`;

const getSkeletonTypeStyles = ({ type }) => {
  switch (type) {
    case 'rect':
      return rectStyles;
    case 'text':
      return textStyles;
    case 'circle':
    default:
      return circleStyles;
  };
};

const getAnimationStyles = ({ animation }) => {
  if (!animation) return;
  switch (animation) {
    case 'pulse':
      return pulseStyles;
    case 'wave':
    default:
      return waveStyles;
  };
};

export const SkeletonContainer = styled.div`
  position: relative;
  overflow: hidden;
  vertical-align: middle;
  background-color: var(--theme-color-dark-200);

  ${getSkeletonTypeStyles};
  ${getAnimationStyles}
`;
