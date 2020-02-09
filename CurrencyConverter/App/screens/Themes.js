import React, { Component } from 'react';
import { ScrollView, ScrollBar, StatusBar } from 'react-native';
import { ListItem, Separator } from '../components/List'
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $green: '$primaryOrange',
  $orange: '$primaryGreen',
  $purple: '$primaryPurple',
})


class Themes extends Component {
  state = {}

  handleThemePress(color) {
    this.props.navigation.goBack()
  }

  render() {
    return (
      <ScrollView>
        <StatusBar barStyle='dark-content' translucent='false' />
        <ListItem
          text='Blue'
          onPress={() => this.handleThemePress(styles.$blue)}
          selected={true}
          checkmark={false}
          iconBackground={styles.$blue}
        />
        <Separator />

        <ListItem
          text='Orange'
          onPress={() => this.handleThemePress(styles.$orange)}
          selected={true}
          checkmark={false}
          iconBackground={styles.$orange}
        />
        <Separator />

        <ListItem
          text='Green'
          onPress={() => this.handleThemePress(styles.$green)}
          selected={true}
          checkmark={false}
          iconBackground={styles.$green}
        />
        <Separator />

        <ListItem
          text='Purple'
          onPress={() => this.handleThemePress(styles.$purple)}
          selected={true}
          checkmark={false}
          iconBackground={styles.$purple}
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default Themes;