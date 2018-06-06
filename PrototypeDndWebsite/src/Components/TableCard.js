import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Card, CardContent, CardHeader} from '@material-ui/core'

let id = 0;
function createData(name, value) {
  id += 1;
  return { id, name, value};
}

const data = [
  createData('XP', 8685),
  createData('Level', 5),
  createData('Initiative', 3),
  createData('Speed', "25+10"),
  createData('Inspiration', "Yes"),
  createData('Proficiency Bonus', 2),
];

function TableCard(props) {

    return (

        <Card>
            <CardHeader title="Experience & Movement"/>            
            <CardContent>
                <Table>
                <TableBody>
                {data.map(n => {
                 return (
                  <TableRow key={n.id}>
                    <TableCell component="th" scope="row">
                      {n.name}
                    </TableCell>
                    <TableCell numeric>{n.value}</TableCell>
                  </TableRow>
                  );
                })}
                  </TableBody>
                </Table>
            </CardContent>
        </Card>            
    )
}

export default TableCard