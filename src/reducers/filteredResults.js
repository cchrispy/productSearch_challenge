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

const filteredResults = (state = { results, input: '' }, action) => {
  switch (action.type) {

    case 'NARROW_SEARCH':
      // If the user continues typing, then narrow down the filtered results
      // instead of re-filtering the original JSON file
      // Slight optimization

      results = results.filter(product => {
        return product.name.toLowerCase().slice(0, action.input.length) === action.input.toLowerCase()
      })
      return Object.assign({}, { results, input: action.input });

    case 'EXPAND_SEARCH':
      // If the user's input shortens, then re-filter the JSON file

      results = uniqProducts.filter(product => {
        return product.name.toLowerCase().slice(0, action.input.length) === action.input.toLowerCase()
      })
      return Object.assign({}, { results, input: action.input });

    case 'APPLY_FILTER':
      // Filter the products based on the type

      typeFilter = results.filter(product => {
        return product.type === action.type;
      })
      return Object.assign({}, { results: typeFilter });

    case 'REMOVE_FILTER':
      // When type 'NONE' is selected

      return Object.assign({}, { results });

    default:
      return state;
  }
}

export default filteredResults;