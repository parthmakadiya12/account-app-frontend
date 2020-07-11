import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export function CreateInvoice({ handleChange, createInvoice,type }) {
  const classes = useStyles();

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Type of Invoice</FormLabel>
              <RadioGroup
                aria-label="type"
                name="type"
                value={type}
                onChange={(e) => handleChange(e, "type")}
              >
                <FormControlLabel
                  value="debit"
                  control={<Radio />}
                  label="Debit"
                />
                <FormControlLabel
                  value="credit"
                  control={<Radio />}
                  label="Credit"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <Grid item xs={12} className={classes.inputField}>
              <TextField
                autoComplete="amount"
                name="amount"
                variant="outlined"
                required
                fullWidth
                id="amount"
                label="amount"
                onChange={(e) => handleChange(e, "amount")}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} className={classes.inputField}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="note"
                label="Invoice Note"
                name="note"
                onChange={(e) => handleChange(e, "note")}
                autoComplete="note"
              />
            </Grid>
          </Grid>
        </Grid>
      </form>
      <Grid item xs={6}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={createInvoice}
          className={classes.submit}
        >
          Generate Invoice
        </Button>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  inputField: {
    marginBottom: "10px",
  },
}));
