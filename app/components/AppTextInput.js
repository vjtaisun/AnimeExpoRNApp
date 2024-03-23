import React, { Component } from "react";
import { StyleSheet, TextInput, View } from "react-native";
export default class AppTextInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={[styles.inputContainer, this.props.inputContainer]}>
        <TextInput
          autoFocus={this.props.autoFocus}
          editable={this.props.editable}
          keyboardType={this.props.keyboardType}
          maxLength={this.props.maxLength}
          multiline={this.props.multiline}
          numberOfLines={this.props.numberOfLines}
          onChangeText={this.props.onChangeText}
          placeholder={this.props.placeholder}
          placeholderTextColor={this.props.placeholderTextColor}
          value={this.props.value}
          selectionColor={"black"}
          style={[
            styles.textInput,
            this.props.textInput,
            { color: "black" },
          ]}
        />
        <View style={[styles.lineView, this.props.lineView]} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
  },
  textInput: {
    fontSize: 20,
  },
  lineView: {
    height: 0.5,
    backgroundColor: "black",
  },
});
