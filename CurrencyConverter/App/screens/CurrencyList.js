import React, { Component } from 'react';
import { Text, FlatList, View, StatusBar } from 'react-native';
import currencies from '../data/currencies'
import { ListItem, Separator } from '../components/List'
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies'
import { connect } from 'react-redux';

class CurrencyList extends Component {
  state = {}

  handlePress = (currency) => {
    const { type } = this.props.navigation.state.params;
    if (type === 'base') {
      this.props.dispatch(changeBaseCurrency(currency))
    } else if (type === 'quote') {
      this.props.dispatch(changeQuoteCurrency(currency))
    }
    this.props.navigation.goBack(null)
  }

  render() {
    let comparisionCurrency = this.props.baseCurrency;
    if (this.props.navigation.state.params.type === 'quote') {
      comparisionCurrency = this.props.quoteCurrency
    }
    return (
      <View style={{ flex: 1, }}>
        <StatusBar barStyle='dark-content' translucent={false} />
        <FlatList
          data={currencies}
          renderItem={({ item }) =>
            <ListItem text={item}
              selected={item === comparisionCurrency}
              onPress={() => this.handlePress(item)}
              iconBackground={this.props.primaryColor}
            />
          }
          keyExtractor={(item) => item}
          ItemSeparatorComponent={Separator}
        />
      </View >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    baseCurrency: state.currencies.baseCurrency,
    quoteCurrency: state.currencies.quoteCurrency,
    primaryColor: state.themes.primaryColor,
  }
}

export default connect(mapStateToProps)(CurrencyList);