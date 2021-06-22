import React, { useState } from 'react';

import Icon from '../icon/icon.component';
import CartDropdown from '../collections-dropdown/collections-dropdown.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  HeaderContainer,
  LogoContainer,
  LogoTitleContainer,
  NavIconsContainer,
  NavContainer
} from './header.styles';

const Header = () => {
  const [isNavHidden, setIsNavHidden] = useState(true);
  const [isCollectionsHidden, setIsCollectionsHidden] = useState(true);

  const toggleNavDropdown = () => setIsNavHidden(!isNavHidden);
  const toggleCollectionsDropdown = () => setIsCollectionsHidden(!isCollectionsHidden);

  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Icon 
          name='lightbulb' 
          size={25}
        />
        <LogoTitleContainer>
          INSPER
        </LogoTitleContainer>
      </LogoContainer>
      <NavIconsContainer>
        {/* <Images /> */}
        <Icon 
          name='images' 
          size={25}
        />
        <Icon 
          name='hamburger' 
          size={25}
          onClick={toggleNavDropdown}
        />
      </NavIconsContainer>
      <NavContainer isHidden={isNavHidden}>
        <a href="/">Favorite</a>
        <a href="/">About</a>
        <a href="/">Login/Signup</a>
        <CustomButton
          isPureButton
          onClick={toggleCollectionsDropdown}
        >
          Collection
        </CustomButton>
      </NavContainer>
      <CartDropdown 
        isHidden={isCollectionsHidden}
        toggleDropdown={toggleCollectionsDropdown}
      />
    </HeaderContainer>
  );
};

export default Header;

