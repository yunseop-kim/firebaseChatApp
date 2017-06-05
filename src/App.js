import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import './App.css';
import * as firebase from 'firebase';
import Login from './Login';
import Messenger from './Messenger';

class App extends Component {
  constructor(props) {
    super(props);
    this.userOn = this.userOn.bind(this)
    this.userOff = this.userOff.bind(this)
    this.state = {
      user: null
    }
  }

  handleAuth() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        firebase.database().ref('User/' + firebase.auth().currentUser.uid).update({
          username: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL
        })
      })
      .catch(error => console.error(`Error : ${error.code}: ${error.message}`))
  }

  handleLogout() {
    firebase.auth().signOut()
      .then(() => {
        console.log('You have dislocated')
      })
      .catch(error => console.error(`Error : ${error.code}: ${error.message}`))
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
  }

  render() {
    return (
      <div>
        <AppBar
          title={this.state.user ? this.state.user.displayName + '님' : "Chatting App"}
          iconElementRight={
            <Login
              user={this.state.user}
              handleLogout={this.handleLogout.bind(this)}
              handleAuth={this.handleAuth.bind(this)}
            />
          }
          style={{ position: "fixed", top: "0", zIndex: "100" }}
        />
        <div>
          {this.state.user ? this.userOn() : this.userOff()}
        </div>
      </div>
    )
  }

  userOn() {
    return (
      <div>
        <Messenger user={this.state.user} />
      </div>
    )
  }

  userOff() {
    return (
      <h5>
        You need to login
      </h5>
    )
  }
}

export default App;
