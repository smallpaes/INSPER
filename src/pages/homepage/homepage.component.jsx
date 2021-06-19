import React from 'react';

import SearchBanner from '../../components/search-banner/search-banner.component';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import Trending from '../../components/trending/trending.component';

import { CollectionsContainer } from './homepage.styles';

const Homepage = () => {
  return (
    <div className="homepage">
      <SearchBanner />
      <CollectionsContainer>
        <CollectionOverview />
        <Trending />
      </CollectionsContainer>
    </div>
  );
};

export default Homepage;