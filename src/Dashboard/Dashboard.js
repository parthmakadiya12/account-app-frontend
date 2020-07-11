import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { CreateInvoice } from "../helpers/CreateInvoice/CreateInvoice";
import { ShowTotal } from "../helpers/ShowTotal/ShowTotal";
import { InvoiceList } from "../helpers/InvoiceList/InvoiceList";
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    this.props.showSpinner();
    await this.props.getInvoices();
    await this.props.countTotal();
    this.props.hideSpinner();
  }

  handleChange = (e, name) => {
    this.setState({
      [name]: e.target.value,
    });
  };

  createInvoice = async () => {
    const { type, amount, note } = this.state;
    this.props.showSpinner();
    await this.props.createInvoice(type, amount, note);
    this.props.hideSpinner();
  };
  render() {
    const { spinner, debit, credit, type, classes } = this.props;
    //invoiceHolder
    if (spinner === true) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.addInvoiceHolder}
        >
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={10} md={8}>
              <Typography variant="h4" gutterBottom>
                Add Invoice
              </Typography>
              <CreateInvoice
                createInvoice={this.createInvoice}
                handleChange={this.handleChange}
                type={type}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.invoiceHolder}
        >
          <Grid item xs={10} md={8}>
            {typeof this.props.invoices !== "undefined" &&
              this.props.invoices.length > 0 && (
                <>
                  <Typography variant="h4" gutterBottom>
                    Invoice List
                  </Typography>
                  <InvoiceList invoices={this.props.invoices} />
                </>
              )}
          </Grid>
        </Grid>
        <ShowTotal logout={this.props.logout} debit={debit} credit={credit} />
      </div>
    );
  }
}

const styles = (theme) => ({
  invoiceHolder: {
    marginTop: "30px",
    marginBottom: "100px",
  },
  addInvoiceHolder: {
    marginTop: "30px",
  },
});

export default withStyles(styles, { withTheme: true })(Dashboard);
