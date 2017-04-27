const narrowSearch = input => ({
  type: 'NARROW_SEARCH',
  input
})

const expandSearch = input => ({
  type: 'EXPAND_SEARCH',
  input
})

const addFilter = type => ({
  type: 'APPLY_FILTER',
  type
})

const removeFilter = () => ({
  type: 'REMOVE_FILTER',
})

export { narrowSearch };
export { expandSearch };
export { addFilter };
export { removeFilter };