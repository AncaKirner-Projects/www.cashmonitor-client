import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const headerList = {
  align: 'left',
  list: [
    'Account',
    'Type',
    'Balance',
    'Currency',
    'Status',
    'Actions'
  ]
};
const tableData = {
  align: 'left',
  data: [
    ['Portofel A', 'cash', 100, 'RON', 'activ', '' ],
    ['Card ING A', 'card', 300, 'RON', 'activ', '' ]
  ]
};
const buttons = [
  {class: 'btn-align-right', name: 'Add Account'}
];

class SimpleTable extends Component {
  state = {}
  render() {
    return (
      <Paper className="paper-table-div">
        <Table className="simple-table">
          <TableHead>
            <TableRow>
              {headerList.list.map((header, id) => (
                <TableCell key={id} className="simple-table-header" align={headerList.align}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.data.map((row, id) => (
              <TableRow key={id}>
                { row.map((cell, idCell) => (
                  <TableCell key={idCell} align="right">{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="btns-div">
          {buttons.map((btn) => 
            <Button variant="contained" color="primary" className={btn.class}>
              {btn.name}
            </Button>  
          )}    
        </div>    
      </Paper>
    );
  }
}

export default SimpleTable;
