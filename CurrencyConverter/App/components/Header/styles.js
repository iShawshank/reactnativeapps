import EStyleSheet from 'react-native-extended-stylesheet'
import { StatusBar } from 'react-native'

export default EStyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    '@media ios': {
      paddingTop: 40,
    },
  },
  button: {
    alignSelf: 'flex-end',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  icon: {
    width: 30
  }
})