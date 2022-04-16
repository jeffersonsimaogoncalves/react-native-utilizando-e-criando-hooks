import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Home from './src/telas/Home';

export default function App() {
  return (
    <SafeAreaView style={styleApp.container}>
      <Home />
    </SafeAreaView>
  );
}

const styleApp = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
