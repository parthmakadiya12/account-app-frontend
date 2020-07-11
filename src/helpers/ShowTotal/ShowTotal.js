import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";

export function ShowTotal({ debit, credit, logout }) {
  const classes = useStyles();
  return (
    <div className={`${classes.bottomContainer} ${classes.row}`}>
      <Button variant="contained" onClick={logout} color="red" className={classes.button}>
        Logout
      </Button>
      <div className={classes.row}>
      <Typography className={`${classes.center} ${classes.row}`} variant="h5">
        Total:
      </Typography>
      <div className={classes.valueContainer}>
        <Typography
          className={`${classes.center} ${classes.row}`}
          variant="body1"
        >
          <b>Credit : </b> {credit}
        </Typography>
        <Typography
          className={`${classes.center} ${classes.row}`}
          variant="body1"
        >
          <b>Debit : </b> {debit}
        </Typography>
      </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  button:{
    backgroundColor:"#ffb9b9",
    borderRadius: 0
  },
  valueContainer: {
    margin: "auto 20px",
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
    justifyContent: "space-between",
    backgroundColor: "#3f51b5",
    color: "white",
  },
});
