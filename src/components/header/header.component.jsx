import React, { useState } from 'react';

import Icon from '../icon/icon.component';

import {
  HeaderContainer,
  LogoContainer,
  LogoTitleContainer,
  NavIconsContainer,
  NavContainer
} from './header.styles';

const Header = () => {
  const [isNavHidden, setIsNavHidden] = useState(true);

  const toggleNavDropdown = () => setIsNavHidden(!isNavHidden);

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
        <a href="/">Preference</a>
        <a href="/">Favorite</a>
        <a href="/">About</a>
        <a href="/">Login/Signup</a>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;

