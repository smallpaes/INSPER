import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import DropdownItem from '../dropdown-item/dropdown-item.component';

import { removeCollection } from '../../redux/collections/collections.actions';

import { selectAllCollections } from '../../redux/collections/collections.selectors';

import {
  CartDropdownContainer,
  EmptyMessageContainer,
  EmptyIcon
} from './collections-dropdown.styles';

const CartDropdown = ({ toggleDropdown, isHidden }) => {
  const collections = useSelector(selectAllCollections);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleItemClick = collectionName => {
    toggleDropdown();
    history.push(`/collection/${collectionName}`);
  };

  const handleRemoveIconClick = (event, collection) => {
    event.stopPropagation();
    dispatch(removeCollection(collection));
  };

  return (
    <CartDropdownContainer isHidden={isHidden}>
      {
        collections.length > 0 ? collections.map(collection => (
          <DropdownItem 
            key={collection} 
            data={collection}
            icon='search'
            actionIcon='cancel'
            handleClick={() => handleItemClick(collection)}
            handleActionClick={e => handleRemoveIconClick(e, collection)}
          />
        )) : (
          <EmptyMessageContainer>
            <EmptyIcon
              name='empty-box' 
              size={20}
            />
            No Collection Added Yet
          </EmptyMessageContainer>
        )
      }
    </CartDropdownContainer>
  )
};

CartDropdown.propTypes = {
  toggleDropdown: PropTypes.func.isRequired,
  isHidden: PropTypes.bool.isRequired
};

export default CartDropdown;
