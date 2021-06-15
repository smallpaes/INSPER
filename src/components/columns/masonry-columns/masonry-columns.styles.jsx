import styled from 'styled-components';

export const MasonryColumnsContainer = styled.div`
  column-count: 2;
  column-gap: 1rem;

  .column {
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 768px) {
    column-count: 3;
    column-gap: 1.5rem;

    .column {
      margin-bottom: 1.5rem;
    }
  }

  @media screen and (min-width: 1441px) {
    column-count: 4;
  }
`;