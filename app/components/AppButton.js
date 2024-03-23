import React, { Component } from "react";
import { StyleSheet, Platform } from "react-native";
import AppText from "./AppText";
import { TouchableOpacity } from "react-native-gesture-handler";
export default class AppButton extends Component {
  constructor(props) {
    super(props);
  }
  _onPressButton() {}
  render() {
    return (
      <TouchableOpacity
        style={[styles.btn, this.props.style]}
        onPress={this.props.onPress}
      >
        <AppText
          title={this.props.title.toUpperCase()}
          style={styles.buttonText}
        />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  btn: {
    borderWidth: 1,
    borderRadius: 4,
    width: 140,
    backgroundColor: "black",
  },
  buttonText: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    textAlign: "center",
    color: "white",
    fontWeight:'bold'
  },
});
