import React from 'react';

import SearchBanner from '../../components/search-banner/search-banner.component';
import Trending from '../../components/trending/trending.component';

import { CollectionsContainer } from './homepage.styles';

const Homepage = () => {
  return (
    <div className="homepage">
      <SearchBanner />
      <CollectionsContainer>
        <Trending />
      </CollectionsContainer>
    </div>
  );
};

export default Homepage;