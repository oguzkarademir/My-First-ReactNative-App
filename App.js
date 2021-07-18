/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TextInput, View} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 3, flexDirection: 'row'}}>
        <View style={{flex:1, backgroundColor: 'red'}}></View>
        <View style={{flex:1, backgroundColor: 'blue'}}></View>
      </View>
      <View style={{flex: 1, backgroundColor: 'yellow'}}></View>
      <View style={{flex: 1, backgroundColor: 'darkred'}}></View>
      <View style={{flex: 1, backgroundColor: 'lightblue'}}></View>
    </View>
  );
};

export default App;
