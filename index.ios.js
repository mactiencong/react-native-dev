/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import PeopleList from "./component/PeopleList"

export default class firstApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PeopleList></PeopleList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('firstApp', () => firstApp);
