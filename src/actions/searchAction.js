const narrowSearch = (input, filter) => ({
  type: 'NARROW_SEARCH',
  filter: filter || '',
  input
})

const expandSearch = (input, filter) => ({
  type: 'EXPAND_SEARCH',
  filter: filter || '',
  input
})

const addFilter = filter => ({
  type: 'APPLY_FILTER',
  filter
})

const removeFilter = () => ({
  type: 'REMOVE_FILTER',
})

export { narrowSearch };
export { expandSearch };
export { addFilter };
export { removeFilter };