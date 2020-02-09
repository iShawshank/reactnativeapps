import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { View, Image } from 'react-native';
import styles from './styles'

class Icon extends Component {
  state = {}

  static propTypes = {
    checkmark: PropTypes.bool,
    visible: PropTypes.bool,
    iconBackground: PropTypes.string,
  }

  render() {
    const iconStyles = [styles.icon]
    if (this.props.visible) {
      iconStyles.push(styles.iconVisible)
    }

    if (this.props.iconBackground) {
      iconStyles.push({ backgroundColor: this.props.iconBackground })
    }
    return (
      <View style={iconStyles}>
        {this.props.checkmark ? (
          <Image
            style={styles.checkIcon}
            source={require('../../assets/images/check.png')}
            resizeMode='contain'
          />
        ) : null}
      </View>
    );
  }
}

export default Icon;