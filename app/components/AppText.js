import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
export default class AppText extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const context = this;
    return (
      <Text
        numberOfLines={context.props.numberOfLines}
        ellipsizeMode={
          context.props.ellipsizeMode ? context.props.ellipsizeMode : "tail"
        }
        onPress={context.props.onPress}
        style={[styles.text, context.props.style]}
      >
        {context.props.title}
      </Text>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: "black",
  },
});