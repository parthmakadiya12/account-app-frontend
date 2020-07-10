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

  render() {
    const { username, password } = this.state;
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
        <button onClick={() => this.props.login(username, password)}>
          Perform Login
        </button>
      </div>
    );
  }
}

export default Login;
