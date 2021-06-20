import React from 'react';
import { useSelector } from 'react-redux';

import SearchBanner from '../../components/search-banner/search-banner.component';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import Trending from '../../components/trending/trending.component';

import { selectAllCollections } from '../../redux/collections/collections.selectors';

import { CollectionsContainer } from './homepage.styles';

const Homepage = () => {
  const COLLECTION_BASE_QUERY = {
    per_page: 6,
    orientation: 'landscape'
  };

  const allCollections = useSelector(selectAllCollections);

  return (
    <div className="homepage">
      <SearchBanner />
      <CollectionsContainer>
        {
          allCollections.map(collection => (
            <CollectionOverview
              key={collection}
              title={collection}
              queries={{
                ...COLLECTION_BASE_QUERY,
                query: collection
              }}
            />
          ))
        }
        <Trending />
      </CollectionsContainer>
    </div>
  );
};

export default Homepage;