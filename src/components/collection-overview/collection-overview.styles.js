import styled from 'styled-components';

export const CollectionContainer = styled.section`
  margin-top: 2rem;
  a { 
    margin: 1rem auto 0 auto;
    width: 50%;
  }

  @media screen and (min-width: 768px) {
    a { width: 360px; }
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