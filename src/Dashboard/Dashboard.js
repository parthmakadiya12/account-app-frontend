import React from "react";

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
    const { type, amount } = this.state;
    this.props.showSpinner();
    await this.props.createInvoice(type, amount);
    this.props.hideSpinner();
  };
  render() {
    const { spinner } = this.props;

    if (spinner === true) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <div>
          <h2>Add Invoide</h2>
          <label>Type of Invoice </label>
          <br />
          <input
            type="radio"
            onChange={(e) => this.handleChange(e, "type")}
            id="debit"
            name="gender"
            value="debit"
          />
          <label for="debit">Debit</label>
          <br />
          <input
            type="radio"
            onChange={(e) => this.handleChange(e, "type")}
            id="credit"
            name="gender"
            value="credit"
          />
          <label for="credit">Credit</label>
          <br />
          <label>Amount</label>
          <br />
          <input type="text" onChange={(e) => this.handleChange(e, "amount")} />
          <br />
          <button onClick={this.createInvoice}>Create Invoice</button>
        </div>
        {this.props.invoices &&
          this.props.invoices.map((i) => {
            return (
              <>
                <h3>{i.username}</h3>
                <h3>{i.amount}</h3>
                <h3>{i.type}</h3>
                <hr />
              </>
            );
          })}
      </div>
    );
  }
}

export default Dashboard;
