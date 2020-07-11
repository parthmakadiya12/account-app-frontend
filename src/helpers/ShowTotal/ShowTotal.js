import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

export function ShowTotal({ debit, credit }) {
  const classes = useStyles();
  return (
    <div className={`${classes.bottomContainer} ${classes.row}`}>
      <Typography className={`${classes.center} ${classes.row}`} variant="h5">
        Total:
      </Typography>
      <div className={classes.valueContainer}>
      <Typography className={`${classes.center} ${classes.row}`} variant="body1">
        <b>Credit : </b> {credit}
      </Typography>
      <Typography className={`${classes.center} ${classes.row}`} variant="body1">
        <b>Debit : </b> {debit}
      </Typography>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  valueContainer:{
    margin:"auto 20px"

  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    position: "absolute",
    bottom: "0",
    height: "60px",
    width: "100%",
    justifyContent:"flex-end",
    backgroundColor:"#3f51b5",
    color:"white"
  },
});
