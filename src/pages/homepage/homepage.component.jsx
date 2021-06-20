import React from 'react';

import SearchBanner from '../../components/search-banner/search-banner.component';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import Trending from '../../components/trending/trending.component';

import { CollectionsContainer } from './homepage.styles';

const Homepage = () => {
  const IMAGE_PER_COLLECTION = 6
  return (
    <div className="homepage">
      <SearchBanner />
      <CollectionsContainer>
        <CollectionOverview
          queries={{
            query: 'nature',
            per_page: IMAGE_PER_COLLECTION
          }}
        />
        <Trending />
      </CollectionsContainer>
    </div>
  );
};

export default Homepage;