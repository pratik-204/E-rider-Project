import React, { Component } from "react";
import BottomTabNavigator from "./components/BottomTabNavigator";
import { StyleSheet } from "react-native";

export default class App extends Component {
  render() {
    return( 
    <BottomTabNavigator>
    </BottomTabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
  