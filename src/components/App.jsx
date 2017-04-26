import React, { Component } from 'react';
import { connect } from 'react-redux';
import sampleAction from '../actions/sampleAction';

import SearchBar from './SearchBar.jsx';
import TableResults from './TableResults.jsx';
import '../styles/main.scss';

// JSON file containing all the products
import products from '../data/products.json';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(products);
    return (
      <div>

        <h1 className='title'>Search for a product</h1><hr/>

        <SearchBar />

        <TableResults />

      </div>
    )
  }
}

// const mapStateToProps = (state, ownProps) => ({
//   reduxStore: state
// })

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   sampleAction: () => {
//     dispatch(sampleAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;