import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Card, CardContent, CardHeader} from '@material-ui/core'


 function TableCardV2 (props) {

    var data = props.data
    return (
        <Card>
            <CardHeader title={props.title}/>            
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

export default TableCardV2