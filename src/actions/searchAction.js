const narrowSearch = (input) => ({
  type: 'NARROW_SEARCH',
  input
})

const expandSearch = (input) => ({
  type: 'EXPAND_SEARCH',
  input
})

export { narrowSearch };
export { expandSearch };