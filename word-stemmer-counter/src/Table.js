import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      maxWidth: 450,
      margin: 'auto'
    },
  });

function createData(word, count) {
    return {word, count};
}



function ResultsTable({results}) {
    const classes = useStyles();

  return (
    <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="left">Word (Top 25)</TableCell>
          <TableCell align="left">Count</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {results.map((word, ind) => {
            let splitWord = word.split(':')

            return(
          <TableRow key={ind}>
            <TableCell align="left">{splitWord[0]}</TableCell>
            <TableCell align="left">{splitWord[1]}</TableCell>
          </TableRow>
        )
       })}
      </TableBody>
    </Table>
  </TableContainer>
  );
}

export default ResultsTable;
