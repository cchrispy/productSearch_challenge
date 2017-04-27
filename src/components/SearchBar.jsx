import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { narrowSearch, expandSearch } from '../actions/searchAction';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: ''
    }
  }

  filterType(type, e) {
    this.setState({ type });
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
          <div className='filter-buttons'>
            <span>
              <RaisedButton className='filter-button' label='Bank' onTouchTap={ this.filterType.bind(this, 'BANK') } primary={ this.state.type === 'BANK' }/>
              <RaisedButton className='filter-button' label='Credit Card' onTouchTap={ this.filterType.bind(this, 'CREDIT_CARD') } primary={ this.state.type === 'CREDIT_CARD' }/>
              <RaisedButton className='filter-button' label='Investment' onTouchTap={ this.filterType.bind(this, 'INVESTMENT') } primary={ this.state.type === 'INVESTMENT' }/>
            </span>
            <span>
              <RaisedButton className='filter-button' label='Loan' onTouchTap={ this.filterType.bind(this, 'LOAN') } primary={ this.state.type === 'LOAN' }/>
              <RaisedButton className='filter-button' label='Mortgage' onTouchTap={ this.filterType.bind(this, 'MORTGAGE') } primary={ this.state.type === 'MORTGAGE' }/>
              <RaisedButton className='filter-button' label='None' onTouchTap={ this.filterType.bind(this, '') } primary={ this.state.type === '' }/>
            </span>
          </div>
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