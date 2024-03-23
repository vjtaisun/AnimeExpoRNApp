import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import AppText from "./AppText";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.container, this.props.container]}>
        <StatusBar barStyle="light-content" />
        <AppText
          style={[styles.header, this.props.headerStyle]}
          title={this.props.header.toUpperCase()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "black",
    padding: 12,
  },
  header: {
    fontSize: 16,
    fontWeight:'bold',
    color: "white",
  },
});
