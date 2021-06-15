import React, { useState } from 'react';

import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg';
import { ReactComponent as Images } from '../../assets/icons/images.svg';

import {
  HeaderContainer,
  LogoContainer,
  LogoIcon,
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
        <LogoIcon />
        <LogoTitleContainer>
          INSPER
        </LogoTitleContainer>
      </LogoContainer>
      <NavIconsContainer>
        <Images />
        <Hamburger onClick={toggleNavDropdown} />
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

