import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends Component {
  render() {
    return (
      <div>
        {this.props.user ? this.renderUserData() : this.renderLoginButton()}
      </div>
    )
  }

  renderLoginButton() {
    return (
      <RaisedButton style={{marginTop:"5px"}} label="Login" primary={true} onClick={this.props.handleAuth} />
    )
  }

  renderUserData() {
    return (
      <RaisedButton style={{marginTop:"5px"}} label="Logout" secondary={true} onClick={this.props.handleLogout} />
    )
  }
}

export default Login;
