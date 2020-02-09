import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles'
class Separator extends Component {
  state = {}
  render() {
    return (
      <View style={styles.separator} />
    );
  }
}

export default Separator;