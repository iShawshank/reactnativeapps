import React, { Component } from 'react';
import { ScrollView, Image, StatusBar, Linking } from 'react-native';
import { ListItem, Separator } from '../components/List';
import PropTypes from 'prop-types'

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
  state = {}

  static propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func
  }

  handleThemesPress() {
    this.props.navigation.navigate('Themes')
  }

  handleSitePress() {
    Linking.openURL('http://fixer.io').catch(() => alert('Error: Fixer.io cant be opened right now.'))
  }

  render() {
    return (
      <ScrollView>
        <StatusBar
          translucent='false'
          barStyle='dark-content'
        />
        <ListItem
          text='Themes'
          onPress={() => this.handleThemesPress()}
          customIcon={
            <Image source={require('../assets/images/next.png')} />
          }
        />
        <Separator />
        <ListItem
          text='Fixer.io'
          onPress={() => this.handleSitePress()}
          customIcon={
            <Image source={require('../assets/images/next.png')} />
          }
        />
        <Separator />
      </ScrollView >
    );
  }
}

export default Options;