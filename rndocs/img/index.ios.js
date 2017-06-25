//imports
import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

//main class
export default class img extends Component {
  render(){
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}

//registration
AppRegistry.registerComponent('img', () => img);
