import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import Router from './router';

class App extends Component {
  componentWillMount(){
    const config = {
      apiKey: 'AIzaSyDvm0j2r0xO59B6iqsIfBxrHCXbLzlupXQ',
      authDomain: 'manager-c9335.firebaseapp.com',
      databaseURL: 'https://manager-c9335.firebaseio.com',
      projectId: 'manager-c9335',
      storageBucket: '',
      messagingSenderId: '11249224371'
    };
    firebase.initializeApp(config);
  }

  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
    </Provider>
  );
}
}

export default App;
