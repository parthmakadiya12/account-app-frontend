import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleInputChange = (e, name) => {
    this.setState({
      [name]: e.target.value,
    });
  };

  performLogin = async () => {
    const { username, password } = this.state;
    this.props.showSpinner();
    await this.props.login(username, password);
    this.props.hideSpinner();
  };

  render() {
    const { username, password } = this.state;
    const { spinner } = this.props;

    if (spinner === true) {
      return <div>Loading</div>;
    }

    return (
      <div>
        Login Page Username:
        <input
          type="text"
          onChange={(e) => this.handleInputChange(e, "username")}
          value={username}
        />
        Password:
        <input
          type="password"
          onChange={(e) => this.handleInputChange(e, "password")}
          value={password}
        />
        <button onClick={this.performLogin}>Perform Login</button>
      </div>
    );
  }
}

export default Login;
