import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import CurrencyList from '../screens/CurrencyList'
import Home from '../screens/Home'
import Options from '../screens/Options'
import Themes from '../screens/Themes'
import { StatusBar } from 'react-native';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
    }
  },
  Options: {
    screen: Options,
    navigationOptions: {
      headerTitle: 'Options'
    }
  }, Themes: {
    screen: Themes,
    navigationOptions: {
      headerTitle: 'Themes',
    }
  }
}, {
  headerMode: 'screen'
})

const CurrencyListStack = createStackNavigator({
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
      cardStyle: { paddingTop: StatusBar.currentHeight },
    }),
  }
}, {
  headerMode: 'screen'
})


const MainNavigator = createStackNavigator({
  Home: {
    screen: HomeStack
  },
  CurrencyList: {
    screen: CurrencyListStack,
  },
},
  {
    mode: 'modal',
    headerMode: 'none'
  }
)

const Navigator = createAppContainer(MainNavigator);

export default Navigator;