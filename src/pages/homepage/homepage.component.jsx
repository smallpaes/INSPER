import React from 'react';

import SearchBanner from '../../components/search-banner/search-banner.component';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import Trending from '../../components/trending/trending.component';

import { CollectionsContainer } from './homepage.styles';

const Homepage = () => {
  const COLLECTION_BASE_QUERY = {
    per_page: 6,
    orientation: 'landscape'
  };

  return (
    <div className="homepage">
      <SearchBanner />
      <CollectionsContainer>
        <CollectionOverview
          queries={{
            ...COLLECTION_BASE_QUERY,
            query: 'nature'
          }}
        />
        <Trending />
      </CollectionsContainer>
    </div>
  );
};

export default Homepage;