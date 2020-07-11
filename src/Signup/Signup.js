import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";

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
      queSet: {
        mother: "What is your monther's surname ?",
        mobile: "Which mobile does your aunt use?(brand)",
        grandpa: "Where did your grand father born ?",
      },
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
    const { classes } = this.props;
    const {
      username,
      password,
      name,
      surname,
      email,
      securityQue,
      securityAns,
      queSet,
    } = this.state;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <PersonAddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="name"
                  name="name"
                  onChange={(e) => this.handleInputChange(e, "name")}
                  variant="outlined"
                  required
                  fullWidth
                  value={name}
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  value={surname}
                  id="surname"
                  label="Surname"
                  name="surname"
                  onChange={(e) => this.handleInputChange(e, "surname")}
                  autoComplete="surname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  value={email}
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={(e) => this.handleInputChange(e, "email")}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Security Question
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={securityQue}
                    onChange={(e) => this.handleInputChange(e, "securityQue")}
                    label="Security Question"
                  >
                    <MenuItem value={queSet.mother}>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={queSet.mother}>{queSet.mother}</MenuItem>
                    <MenuItem value={queSet.grandpa}>{queSet.grandpa}</MenuItem>
                    <MenuItem value={queSet.mother}>{queSet.mother}</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  value={securityAns}
                  fullWidth
                  id="securityAns"
                  label="Answer for Security Que"
                  name="securityAns"
                  onChange={(e) => this.handleInputChange(e, "securityAns")}
                  autoComplete="securityAns"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  value={username}
                  fullWidth
                  id="username"
                  label="username"
                  name="username"
                  onChange={(e) => this.handleInputChange(e, "username")}
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  value={password}
                  label="Password"
                  type="password"
                  onChange={(e) => this.handleInputChange(e, "password")}
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.performSignup}
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

const styles = (theme) => ({
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
});

export default withStyles(styles, { withTheme: true })(SignUp);
