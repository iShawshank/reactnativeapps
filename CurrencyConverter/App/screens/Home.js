import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header'
import { swapCurrency, changeCurrencyAmount } from '../actions/currencies'
import { connect } from 'react-redux';


class Home extends Component {
  handlePressBaseCurrency() {
    this.props.navigation.navigate('CurrencyList', {
      title: 'Base Currency',
      type: 'base'
    })
  }

  handlePressQuoteCurrency() {
    this.props.navigation.navigate('CurrencyList', {
      title: 'Quote Currency',
      type: 'quote',
    })
  }

  handleTextChange = (text) => {
    // console.log('changeCurrencyAmount', changeCurrencyAmount(text))
    const { dispatch } = this.props;
    dispatch(changeCurrencyAmount(text));
  };

  handleSwapCurrency = () => {
    // console.log('swapCurrency', swapCurrency())
    const { dispatch } = this.props;
    dispatch(swapCurrency());
  };

  handleOptionsPress() {
    this.props.navigation.navigate('Options')
  }

  render() {
    let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
    if (this.props.isFetching) {
      quotePrice = '...'
    }
    return (
      <Container backgroundColor={this.props.primaryColor}>
        <StatusBar barStyle='light-content' />
        <Header onPress={() => this.handleOptionsPress()} />
        <KeyboardAvoidingView behavior='padding'>
          <Logo tintColor={this.props.primaryColor} />
          <InputWithButton
            buttonText={this.props.baseCurrency}
            onPress={() => this.handlePressBaseCurrency()}
            defaultValue={this.props.amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
            textColor={this.props.primaryColor}
          />
          <InputWithButton
            buttonText={this.props.quoteCurrency}
            onPress={() => this.handlePressQuoteCurrency()}
            editable={false}
            value={quotePrice}
            textColor={this.props.primaryColor}
          />
          <LastConverted
            base={this.props.baseCurrency}
            date={this.props.lastConvertedDate}
            quote={this.props.quoteCurrency}
            conversionRate={this.props.conversionRate}
          />
          <ClearButton
            text='Reverse Currencies'
            onPress={this.handleSwapCurrency}
          />
        </KeyboardAvoidingView>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const baseCurrency = state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {}
  const rates = conversionSelector.rates || {}

  return {
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    isFetching: conversionSelector.isFetching,
    lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
    primaryColor: state.themes.primaryColor,
  }
}

export default connect(mapStateToProps)(Home)