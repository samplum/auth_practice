import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBgRfE1F4dvlORx7wUPgJ2iUT0uMiUT_t0",
      authDomain: "authentication-e10e8.firebaseapp.com",
      databaseURL: "https://authentication-e10e8.firebaseio.com",
      projectId: "authentication-e10e8",
      storageBucket: "authentication-e10e8.appspot.com",
      messagingSenderId: "734776524091",
      appId: "1:734776524091:web:dfac69528ec764a7"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true})
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}> Log Out </Button>
        );
      case false:
        return <LoginForm />
      default:
        return <Spinner size="large"/>
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication'/>
        {this.renderContent()}
      </View>
    )
  }
};

export default App;