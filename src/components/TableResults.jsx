import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class TableResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='table-results'>
      
        <Table
          selectable={ false }
          wrapperStyle={{ maxHeight: '70vh' }} >

          <TableHeader
            adjustForCheckbox={ false }
            displaySelectAll={ false }
            enableSelectAll={ false } >
            <TableRow
              selectable={ false } >
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>URL</TableHeaderColumn>
              <TableHeaderColumn>Type</TableHeaderColumn>
            </TableRow>
          </TableHeader>

          <TableBody
            displayRowCheckbox={ false }
            showRowHover={ true } >

            {
              this.props.results.map(product => (
                <TableRow selectable={ false } key={ product.name } >
                  <TableRowColumn>{ product.name }</TableRowColumn>
                  <TableRowColumn><a href={ product.url }>{ product.url }</a></TableRowColumn>
                  <TableRowColumn>{ product.type }</TableRowColumn>
                </TableRow>
              ))
            }

          </TableBody>
        </Table>

        {
          !this.props.results.length ?
          <h1 className='no-results'>No results</h1>
          :
          null
        }
      </div>
    )
  }
}

export default TableResults;