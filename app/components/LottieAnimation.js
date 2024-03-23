import React, { Component } from 'react';
import LottieView from "lottie-react-native";

export default class LottieAnimation extends Component {
    render() {
        return (
            <LottieView
                autoPlay loop
                ref={animation => {
                    this.animation = animation;
                }}
                style={[{
                    backgroundColor: 'transparent',
                }, this.props.style]}
                source={this.props.animationJson}
            />
        );
    }
}