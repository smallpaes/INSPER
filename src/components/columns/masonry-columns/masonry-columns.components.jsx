import React from 'react';

import { MasonryColumnsContainer } from './masonry-columns.styles';

const MasonryColumns = ({ children }) => {
  return (
    <MasonryColumnsContainer>
      { children }
    </MasonryColumnsContainer>
  );
};

export default MasonryColumns;