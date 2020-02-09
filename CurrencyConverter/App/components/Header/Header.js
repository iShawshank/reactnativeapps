import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'
import styles from './styles'

class Header extends Component {

  static propTypes = {
    onPress: PropTypes.func,
  }
  // state = {}
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
          <Image resizeMode='contain' style={styles.icon} source={require('../../assets/images/gear.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Header;