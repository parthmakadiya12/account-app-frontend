import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

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
    const { spinner,debit,credit } = this.props;

    if (spinner === true) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <Button variant="contained" onClick={this.props.logout} color="primary">
          Logout
        </Button>
        <CreateInvoice
          createInvoice={this.createInvoice}
          handleChange={this.handleChange}
        />
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid xs={10} md={8}  spacing={3}>
            <Typography variant="h4" gutterBottom> Invoice List </Typography>
            <InvoiceList invoices={this.props.invoices} />
          </Grid>
        </Grid>
        <ShowTotal debit={debit} credit={credit} />
      </div>
    );
  }
}

export default Dashboard;
