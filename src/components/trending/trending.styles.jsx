import styled from 'styled-components';

export const TrendingContainer = styled.section`
  margin-top: 2rem;
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