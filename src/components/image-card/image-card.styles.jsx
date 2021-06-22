import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import Icon from '../icon/icon.component';

export const CardContainer = styled.div`
  position: relative;
  border-radius: var(--theme-border-radius-base);
  width: 100%;
  overflow: hidden;
  box-shadow: var(--theme-box-shadow-h);
  background-color: ${({ placeholderColor }) => placeholderColor};

  &:hover {
    div {
      opacity: 1;
    }
  }
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: ${({ fixedHeight, height }) => fixedHeight ? height + 'px' : 'auto'};
  display: block;
  object-fit: ${({ fixedHeight }) => fixedHeight ? 'cover' : 'fill'};
  object-position: center;
`;

export const DetailContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: ;
  background: linear-gradient(transparent, rgba(111,111,111,0.8));
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  opacity: 0;
  transition: opacity .2s linear;
`;

export const InfoContainer = styled(Link)`
  display: flex;
  align-items: center;
`;

export const DescriptionContainer = styled.p`
  color: var(--theme-color-white);
  font-size: var(--theme-font-size-x-small);
  margin-left: 5px;
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex: 0 0 45px;
  margin-left: 5px;
  justify-content: space-between;
`;

const ActionIconStyles = css`
  width: 18px;
  height: auto;
  fill: var(--theme-color-white);
  cursor: pointer;
`;

export const HeartContainer = styled(Icon).attrs({
  name: 'heart'
})`
  &:hover { fill: red; }
  ${ActionIconStyles}
`;

export const DownloadContainer = styled(Icon).attrs({
  name: 'download'
})`
  ${ActionIconStyles}
`;