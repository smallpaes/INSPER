import styled from 'styled-components';

import Icon from '../icon/icon.component';

export const CartDropdownContainer = styled.div`
  ${({ isHidden }) => isHidden && { display: 'none' }};
  width: 160px;
  height: 170px;
  overflow: auto;
  position: absolute;
  top: var(--header-height);
  right: .5rem;
  background-color: var(--theme-bg-secondary);
  box-shadow: var(--theme-box-shadow-m);
  border-radius: var(--theme-border-radius-small);
  padding: 8px;
`;

export const EmptyMessageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--theme-font-size-x-small);
  flex-direction: column;
  color: var(--theme-color-dark-500);
`;

export const EmptyIcon = styled(Icon)`
  fill: var(--theme-color-dark-500);
`;