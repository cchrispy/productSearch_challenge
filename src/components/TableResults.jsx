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
            displayRowCheckbox={ false } >
            <TableRow
              selectable={ false } >
              <TableRowColumn>Chris</TableRowColumn>
              <TableRowColumn>google</TableRowColumn>
              <TableRowColumn>HUMAN</TableRowColumn>
            </TableRow>
            <TableRow
              selectable={ false } >
              <TableRowColumn>Chris</TableRowColumn>
              <TableRowColumn>google</TableRowColumn>
              <TableRowColumn>HUMAN</TableRowColumn>
            </TableRow>
            <TableRow
              selectable={ false } >
              <TableRowColumn>Chris</TableRowColumn>
              <TableRowColumn>google</TableRowColumn>
              <TableRowColumn>HUMAN</TableRowColumn>
            </TableRow>
            <TableRow
              selectable={ false } >
              <TableRowColumn>Chris</TableRowColumn>
              <TableRowColumn>google</TableRowColumn>
              <TableRowColumn>HUMAN</TableRowColumn>
            </TableRow>
            <TableRow
              selectable={ false } >
              <TableRowColumn>Chris</TableRowColumn>
              <TableRowColumn>google</TableRowColumn>
              <TableRowColumn>HUMAN</TableRowColumn>
            </TableRow>
            <TableRow
              selectable={ false } >
              <TableRowColumn>Chris</TableRowColumn>
              <TableRowColumn>google</TableRowColumn>
              <TableRowColumn>HUMAN</TableRowColumn>
            </TableRow>
            <TableRow
              selectable={ false } >
              <TableRowColumn>Chris</TableRowColumn>
              <TableRowColumn>google</TableRowColumn>
              <TableRowColumn>HUMAN</TableRowColumn>
            </TableRow>
            <TableRow
              selectable={ false } >
              <TableRowColumn>Chris</TableRowColumn>
              <TableRowColumn>google</TableRowColumn>
              <TableRowColumn>HUMAN</TableRowColumn>
            </TableRow>
            <TableRow
              selectable={ false } >
              <TableRowColumn>Chris</TableRowColumn>
              <TableRowColumn>google</TableRowColumn>
              <TableRowColumn>HUMAN</TableRowColumn>
            </TableRow>
            <TableRow
              selectable={ false } >
              <TableRowColumn>Chris</TableRowColumn>
              <TableRowColumn>google</TableRowColumn>
              <TableRowColumn>HUMAN</TableRowColumn>
            </TableRow>
            <TableRow
              selectable={ false } >
              <TableRowColumn>Chris</TableRowColumn>
              <TableRowColumn>google</TableRowColumn>
              <TableRowColumn>HUMAN</TableRowColumn>
            </TableRow>
            <TableRow
              selectable={ false } >
              <TableRowColumn>Chris</TableRowColumn>
              <TableRowColumn>google</TableRowColumn>
              <TableRowColumn>HUMAN</TableRowColumn>
            </TableRow>
            <TableRow
              selectable={ false } >
              <TableRowColumn>Chris</TableRowColumn>
              <TableRowColumn>google</TableRowColumn>
              <TableRowColumn>HUMAN</TableRowColumn>
            </TableRow>
            <TableRow
              selectable={ false } >
              <TableRowColumn>Chris</TableRowColumn>
              <TableRowColumn>google</TableRowColumn>
              <TableRowColumn>HUMAN</TableRowColumn>
            </TableRow>
            <TableRow
              selectable={ false } >
              <TableRowColumn>Chris</TableRowColumn>
              <TableRowColumn>google</TableRowColumn>
              <TableRowColumn>HUMAN</TableRowColumn>
            </TableRow>
            <TableRow
              selectable={ false } >
              <TableRowColumn>Chris</TableRowColumn>
              <TableRowColumn>google</TableRowColumn>
              <TableRowColumn>HUMAN</TableRowColumn>
            </TableRow>
          </TableBody>

        </Table>


      </div>
    )
  }
}

export default TableResults;