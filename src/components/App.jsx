import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBar from './SearchBar.jsx';
import TableResults from './TableResults.jsx';
import '../styles/main.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        <h1 className='title'>Search for a product</h1><hr/>

        <SearchBar input={ this.props.input }/>

        <TableResults results={ this.props.results }/>

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  input: state.filteredResults.input,
  results: state.filteredResults.results
})

export default connect(mapStateToProps)(App);