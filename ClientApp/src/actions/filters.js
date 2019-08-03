
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

export const sortByName = () => ({
  type: 'SORT_BY_NAME'
});

export const sortBySponsor = () => ({
  type: 'SORT_BY_SPONSOR'
});

export const sortByProtocol = () => ({
  type: 'SORT_BY_PROTOCOL'
});

