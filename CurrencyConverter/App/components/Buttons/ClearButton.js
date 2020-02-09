/* eslint-disable no-undef */
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { TouchableOpacity, Image, View, Text } from 'react-native';
import styles from './styles'

class ClearButton extends Component {
  // state = {}

  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.props.onPress}>
        <View style={styles.wrapper}>
          <Image
            resizeMode='contain'
            style={styles.icon}
            source={require('../../assets/images/icon.png')} />
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ClearButton;