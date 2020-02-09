import React from 'react';
import { StyleSheet, View, Dimensions, Image } from 'react-native';

const screen = Dimensions.get('window')
const halfWidth = screen.width / 2;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    backgroundColor: '#FF4136',
    width: halfWidth,
    height: halfWidth,
    borderRadius: halfWidth,
    alignItems: 'center',
    justifyContent: 'center'
  },
  circleCorrect: {
    backgroundColor: '#28A125',
  },
  icon: {
    width: screen.width / 3
  }

})

export const Alert = ({ correct, visible }) => {
  if (!visible) return null;

  const icon = correct
    ? require('../assets/check.png')
    : require('../assets/close.png');

  const circleStyles = [styles.circle];

  if (correct) {
    circleStyles.push(styles.circleCorrect);
  }

  return (
    <View style={styles.container}>
      <View style={circleStyles}>
        <Image source={icon} style={styles.icon} resizeMode="contain" />
      </View>
    </View>
  );
};