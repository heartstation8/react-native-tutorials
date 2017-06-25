// Index.android.js - place code in here for Android!

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a Component
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
  );
// Render Component to the device
AppRegistry.registerComponent('albums', () => App);