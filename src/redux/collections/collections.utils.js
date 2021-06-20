export const addCollection = (collections, collectionName) => {
  const isExisted = collections.some(collection => collection === collectionName);
  return isExisted ? collections : [collectionName, ...collections];
};