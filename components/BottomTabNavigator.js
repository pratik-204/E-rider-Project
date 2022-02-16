import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RideScreen from "../screens/Ride";
import RideHistoryScreen from "../screens/RideHistory";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Rent Ride" component={RideScreen}></Tab.Screen>
            <Tab.Screen name="Ride History" component={RideHistoryScreen} ></Tab.Screen>
            </Tab.Navigator>
      </NavigationContainer>
    );
  }
};
