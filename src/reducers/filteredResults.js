// JSON file containing all the products
import products from '../data/products.json';

// remove duplicate products from the list of products
var storage = {};
var uniqProducts = products.products.filter(product => {
  if (!storage[product.name]) {
    storage[product.name] = true;
    return true;
  }
  return false;
})
var results = uniqProducts;
var typeFilter = results.slice();

const filteredResults = (state = { results, input: '', filter: '' }, action) => {
  switch (action.type) {

    case 'NARROW_SEARCH':
      // If the user continues typing, then narrow down the filtered results
      // instead of re-filtering the original JSON file
      // Slight optimization

      results = results.filter(product => {
        return product.name.toLowerCase().slice(0, action.input.length) === action.input.toLowerCase()
      })
      if (action.filter) { // apply a filter if it exists
        typeFilter = results.filter(product => {
          return product.type === action.filter;
        })
        return Object.assign({}, state, { results: typeFilter, input: action.input });
      }
      return Object.assign({}, state, { results, input: action.input });

    case 'EXPAND_SEARCH':
      // If the user's input shortens, then re-filter the JSON file

      results = uniqProducts.filter(product => {
        return product.name.toLowerCase().slice(0, action.input.length) === action.input.toLowerCase()
      })
      if (action.filter) { // apply a filter if it exists
        typeFilter = results.filter(product => {
          return product.type === action.filter;
        })
        return Object.assign({}, state, { results: typeFilter, input: action.input });
      }
      return Object.assign({}, state, { results, input: action.input });

    case 'APPLY_FILTER':
      // Filter the products based on the type

      typeFilter = results.filter(product => {
        return product.type === action.filter;
      })
      return Object.assign({}, state, { results: typeFilter, filter: action.filter });

    case 'REMOVE_FILTER':
      // When type 'NONE' is selected

      return Object.assign({}, state, { results, filter: '' });

    default:
      return state;
  }
}

export default filteredResults;