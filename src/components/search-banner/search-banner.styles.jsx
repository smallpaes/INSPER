import styled from 'styled-components';

import Icon from '../icon/icon.component';

export const BannerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  overflow: hidden;

  video {
    position: absolute;
    z-index: -1;
  }

  @media screen and (min-width: 768px) {
    height: 300px;
  }

  @media screen and (min-width: 1441px) {
    height: 400px;
  }
`;

export const TitleContainer = styled.h2`
  color: var(--theme-color-white);
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: var(--theme-font-size-xx-huge);
  }
`;

export const FormContainer = styled.form`
  width: 300px;
  height: 30px;
  background-color: var(--theme-bg-secondary);
  border-radius: 7px;
  padding: 0 5px;
  display: grid;
  grid-template-columns: 1fr 18px;
  grid-gap: 5px;
  align-items: center;
  box-shadow: var(--theme-box-shadow-h);

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 30px;
    width: 400px;
    height: 55px;
    padding: 0 10px;
  }
`;

export const InputContainer = styled.input`
  height: 100%;
  border: none;
  font-size: var(--theme-font-size-base);
  color: var(--theme-color-dark-500);

  @media screen and (min-width: 768px) {
    font-size: var(--theme-font-size-large);
  }
`;

export const AddIcon = styled(Icon).attrs({
  name: 'add',
  fill: 'var(--theme-color-dark-200)'
})`
  width: 100%;
  height: auto;
  cursor: pointer;
`;