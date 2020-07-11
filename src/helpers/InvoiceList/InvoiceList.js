import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export function InvoiceList({ invoices }) {
  const classes = useStyles();
  console.log(invoices)
  if(!!!invoices){
    return(<></>)
  }
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>type</TableCell>
              <TableCell>Note</TableCell>
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices &&
              invoices.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.note}</TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});
