export const SEARCH_QUERY = {
  type: 'SEARCH_FILTER',
  query: ''
};

export const query = (text) => {
  return {
    type: SEARCH_QUERY.type,
    query: text
  };
};
