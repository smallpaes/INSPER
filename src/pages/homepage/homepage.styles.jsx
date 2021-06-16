import styled from 'styled-components';

export const CollectionsContainer = styled.section`
  padding: var(--container-padding-mobile);
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding: var(--container-padding-tablet);
  }

  @media screen and (min-width: 1441px) {
    max-width: 1400px;
    margin: 0 auto;
  }
`;