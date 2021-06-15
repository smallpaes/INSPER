import styled from 'styled-components';

export const VideoContainer = styled.video`
  width: 100%;
  height: auto;
  filter: ${({ isCanPlay }) => isCanPlay ? 'unset' : 'blur(4px)'}
`;