import React from "react";
import Button from "@material-ui/core/Button";

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
    const { spinner } = this.props;

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
        <ShowTotal debit={220} credit={1122} />
        <InvoiceList invoices={this.props.invoices} />
      </div>
    );
  }
}

export default Dashboard;
