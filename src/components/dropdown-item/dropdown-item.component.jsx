import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../icon/icon.component';

import { ActionIconContainer } from './dropdown-item.styles';

import { 
  DropdownItemContainer,
  DataContainer
} from './dropdown-item.styles';

const DropdownItem = ({ 
  data, 
  icon, 
  actionIcon,
  handleClick,
  handleActionClick
}) => (
  <DropdownItemContainer onClick={handleClick}>
    {
      icon && <Icon 
        name={icon} 
        size={10}
        color='var(--theme-color-dark-300)'
      />
    }
    <DataContainer>{data}</DataContainer>
    {
      actionIcon && (
        <ActionIconContainer 
          name={actionIcon} 
          size={10}
          color='var(--theme-color-dark-300)'
          onClick={handleActionClick}
        />
      )
    }
  </DropdownItemContainer>
);

DropdownItem.propTypes = {
  data: PropTypes.string.isRequired,
  icon: PropTypes.node,
  actionIcon: PropTypes.node,
  handleClick: PropTypes.func.isRequired,
  handleActionClick: PropTypes.func
};

export default DropdownItem;