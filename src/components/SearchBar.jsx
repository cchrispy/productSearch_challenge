import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='search-bar'>
        <span className='inline'>
        <TextField
          floatingLabelText='Enter a product name here' />
        </span>
        <span className='inline'>TYPE filter goes here later</span>
      </div>
    )
  }
}

export default SearchBar;