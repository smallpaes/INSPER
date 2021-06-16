import styled, { css } from 'styled-components';

const MasonryColumnsStyles = css`
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

const GridColumnsStyles = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const getColumnsStyles = props => {
  if (props.isMasonry) return MasonryColumnsStyles;
  if (props.isGrid) return GridColumnsStyles;
};

export const CustomColumnsContainer = styled.div`
  ${getColumnsStyles}
`;