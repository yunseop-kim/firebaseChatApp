import React, { Component } from 'react';
import logo from './logo.svg';

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
      <div>
        <img width={80} height={80} src={logo} alt="" />
        <h3>Chatting App</h3>
        <button onClick={this.props.handleAuth}>Login</button>
      </div>
    )
  }

  renderUserData() {
    return (
      <div>
        <img width={30} height={30} src={this.props.user.photoURL}
          alt="" />
        <h4>{this.props.user.displayName}</h4>
        <h6>{this.props.user.email}</h6>
        <button onClick={this.props.handleLogout}>Logout</button>
      </div>
    )
  }
}

export default Login;
