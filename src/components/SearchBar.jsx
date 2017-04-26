import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='search-bar'>
        <TextField
          floatingLabelText='Enter a product name here' />
      </div>
    )
  }
}

export default SearchBar;