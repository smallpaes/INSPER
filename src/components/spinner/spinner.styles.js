import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    -webkit-transform: rotate(360deg);
  }
`;

export const SpinnerOverlay = styled.div`
  width: 100%;
  height: ${({ height }) => typeof height === 'string' ? height : `${height}px`};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border: 3px solid var(--theme-color-dark-200);
  border-radius: 50%;
  border-top-color: var(--theme-color-dark-600);
  animation: ${spin} 1s ease-in-out infinite;
`;