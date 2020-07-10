import React from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      email: "",
      securityQue: "",
      securityAns: "",
      username: "",
      password: "",
    };
  }

  handleInputChange = (e, name) => {
    this.setState({
      [name]: e.target.value,
    });
  };

  performSignup = async () => {
    const {
      username,
      password,
      name,
      surname,
      email,
      securityQue,
      securityAns,
    } = this.state;
    const userdata = {
      username,
      password,
      name,
      surname,
      email,
      securityQue,
      securityAns,
    };
    this.props.showSpinner();
    await this.props.signup(userdata);
    this.props.hideSpinner();
  };

  render() {
    const {
      username,
      password,
      name,
      surname,
      email,
      securityQue,
      securityAns,
    } = this.state;
    const { spinner } = this.props;

    if (spinner === true) {
      return <div>Loading</div>;
    }

    return (
      <div>
        Login Page Name:
        <input
          type="text"
          onChange={(e) => this.handleInputChange(e, "name")}
          value={name}
        />
        surname:
        <input
          type="text"
          onChange={(e) => this.handleInputChange(e, "surname")}
          value={surname}
        />
        Email:
        <input
          type="text"
          onChange={(e) => this.handleInputChange(e, "email")}
          value={email}
        />
        securityQue:
        <input
          type="text"
          onChange={(e) => this.handleInputChange(e, "securityQue")}
          value={securityQue}
        />
        securityAns:
        <input
          type="text"
          onChange={(e) => this.handleInputChange(e, "securityAns")}
          value={securityAns}
        />
        Username:
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
        <button onClick={this.performSignup}>signup</button>
      </div>
    );
  }
}

export default SignUp;
