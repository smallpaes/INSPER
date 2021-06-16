import styled from 'styled-components';

export const CollectionContainer = styled.section`
  margin-top: 2rem;
`;

export const TitleContainer = styled.h3`
  margin-bottom: 10px;
  text-transform: uppercase;
  color: var(--theme-text-dark-700);
  text-align: center;
  
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;