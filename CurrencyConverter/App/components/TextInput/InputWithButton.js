import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import styles from './styles';
import color from 'color';

export default class InputWithButton extends Component {

  static defaultProps = {
    editable: true,
  }

  static propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool,
  }

  render() {
    const containerStyles = [styles.container];

    const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
      styles.$buttonBackgroundColorModifier
    );

    if (this.props.editable === false) {
      containerStyles.push(styles.containerDisabled)
    }

    const textStyles = [styles.buttonText, { color: this.props.textColor }]
    return (
      <View style={containerStyles}>
        <TouchableHighlight
          underlayColor={underlayColor}
          style={styles.buttonContainer}
          onPress={this.props.onPress}
        >
          <Text style={textStyles}>{this.props.buttonText}</Text>
        </TouchableHighlight>
        <View style={styles.border} />
        <TextInput
          style={styles.input}
          underlineColorAndroid='transparent'
          {...this.props}
        />
      </View>
    )
  }
}