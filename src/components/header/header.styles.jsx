import styled from 'styled-components';

import { ReactComponent as Logo } from '../../assets/icons/lightbulb.svg';

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

export const LogoContainer = styled.div`
  display: flex;
  user-select: none;
`;

export const LogoIcon = styled(Logo)`
  width: 25px;
`;

export const LogoTitleContainer = styled.h3`
  margin-left: 5px;
  color: var(--theme-text-dark-900);
`;

export const NavIconsContainer = styled.nav`
  display: grid;
  grid-template-columns: 25px;
  grid-auto-columns: 25px;
  grid-auto-flow: column;
  grid-gap: 15px;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
    fill: var(--theme-text-black-500);
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
    border-bottom: 1px solid var(--theme-text-dark-100);
    color: var(--theme-text-dark-500);
    font-size: var(--theme-font-size-x-small);
    text-transform: uppercase;
  }


  @media screen and (min-width: 768px) {
    all: unset;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 20px;
    
    a { 
      padding: 0;
      border-bottom: none;
      color: var(--theme-text-dark-500);
      font-size: var(--theme-font-size-small);
    }
  }
`;