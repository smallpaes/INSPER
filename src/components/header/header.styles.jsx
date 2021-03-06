import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  position: relative;
  height: var(--header-height);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  background: var(--theme-bg-secondary);
  z-index: 1;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  user-select: none;
`;

export const LogoTitleContainer = styled.h3`
  margin-left: 5px;
  color: var(--theme-color-dark-900);
`;

export const NavIconsContainer = styled.nav`
  display: grid;
  grid-template-columns: 25px;
  grid-auto-columns: 25px;
  grid-auto-flow: column;
  grid-gap: 15px;
  align-items: center;

  svg {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavContainer = styled.nav`
  position: absolute;
  top: var(--header-height);
  left: 0;
  width: 100%;
  display: ${({ isHidden }) => isHidden ? 'none' : 'grid'};
  grid-auto-flow: row;
  text-align: center;
  box-shadow: var(--theme-box-shadow-s);
  background: var(--theme-bg-secondary);

  a {
    padding: 10px 0;
    border-bottom: 1px solid var(--theme-color-dark-100);
    color: var(--theme-color-dark-500);
    font-size: var(--theme-font-size-x-small);
    text-transform: uppercase;
  }


  @media screen and (min-width: 768px) {
    all: unset;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 20px;
    
    a, button { 
      padding: 0;
      border-bottom: none;
      color: var(--theme-color-dark-500);
      font-size: var(--theme-font-size-small);
      letter-spacing: unset;
      font-weight: bold;
    }
  }
`;