import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types'
import Icon from './Icon'


class ListItem extends Component {
  state = {}

  static defaultProps = {
    checkmark: true,
    visible: true,
    selected: false,
    customIcon: null,
  }

  static propTypes = {
    text: PropTypes.string,
    selected: PropTypes.bool,
    onPress: PropTypes.func,
    checkmark: PropTypes.bool,
    visible: PropTypes.bool,
    customIcon: PropTypes.element,
    iconBackground: PropTypes.string,
  }

  render() {

    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        underlayColor={styles.$underlayColor}
      >
        <View style={styles.row}>
          <Text style={styles.text}>{this.props.text}</Text>
          {this.props.selected ? (
            <Icon
              checkmark={this.props.checkmark}
              visible={this.props.visible}
              iconBackground={this.props.iconBackground} />
          ) : <Icon />}
          {this.props.customIcon}
        </View>
      </TouchableHighlight>
    );
  }
}

export default ListItem;