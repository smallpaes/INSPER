import styled from 'styled-components';

export const CollectionContainer = styled.section`
  margin-top: 2rem;
  div { margin-bottom: .5rem; }
  button { margin: 0 auto; }

  @media screen and (min-width: 768px) {
    button { min-width: 360px; }
  }
`;

export const TitleContainer = styled.h3`
  margin-bottom: 10px;
  text-transform: uppercase;
  color: var(--theme-color-dark-700);
  text-align: center;
  
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;