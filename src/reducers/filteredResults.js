// JSON file containing all the products
import products from '../data/products.json';

var results = products.products.slice();

const filteredResults = (state = { results }, action) => {
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

      results = products.filter(product => {
        return product.name.toLowerCase().slice(0, action.input.length) === action.input.toLowerCase()
      })
      return Object.assign({}, { results, input: action.input });
      
    default:
      return state;
  }
}

export default filteredResults;