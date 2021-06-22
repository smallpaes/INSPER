import styled from 'styled-components';

import Icon from '../icon/icon.component';

export const DropdownItemContainer = styled.div`
  border-radius: var(--theme-border-radius-x-large);
  box-shadow: var(--theme-box-shadow-s);
  display: flex;
  align-items: center;
  min-height: 26px;
  padding: 6px 9px;
  cursor: pointer;
  &:not(:last-of-type) {
    margin-bottom: 5px;
  }
`;

export const DataContainer = styled.p`
  font-size: var(--theme-font-size-x-small);
  color: var(--theme-color-dark-500);
  flex-grow: 1;
  padding: 0 7px;
  cursor: pointer;
`;

export const ActionIconContainer = styled(Icon)`
  cursor: pointer;
`;