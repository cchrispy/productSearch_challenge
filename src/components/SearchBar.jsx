import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { narrowSearch, expandSearch } from '../actions/searchAction';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='search-bar'>

        <span className='inline'>
          <TextField
            floatingLabelText='Enter a product name here'
            onChange={ this.props.search } />
        </span>

        <span className='inline'>
          <RaisedButton label='button 1' primary/>
          <RaisedButton label='button 2' primary/>
          <RaisedButton label='button 3' primary/>
          <RaisedButton label='button 4' primary/>
          <RaisedButton label='button 5' primary/>
        </span>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  results: state.filteredResults.results
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  search: (e, input) => {
    e.preventDefault();
    if (input.length > ownProps.input.length) {
      dispatch(narrowSearch(input));
    } else {
      dispatch(expandSearch(input));
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);