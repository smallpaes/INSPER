import styled from 'styled-components';

export const CollectionContainer = styled.section`
  padding: var(--container-padding-mobile);
  margin: 1rem auto 0 auto;

  @media screen and (min-width: 768px) {
    padding: var(--container-padding-tablet);
  }

  @media screen and (min-width: 1441px) {
    max-width: 1400px;
    margin: 1rem auto 0 auto;
  }
`;

export const TitleContainer = styled.h1`
  margin-bottom: 10px;
  text-transform: uppercase;
  color: var(--theme-color-dark-700);
  text-align: center;
`;