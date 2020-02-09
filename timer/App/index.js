import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions, Picker, Platform, Vibration } from 'react-native';

const screen = Dimensions.get('window');

function createArray(length) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(i.toString())
  }
  return arr;
}

const AVAILABLE_MINUTES = createArray(10);
const AVAILABLE_SECONDS = createArray(60);

export default class App extends Component {

  state = {
    remainingSeconds: 5,
    isRunning: false,
    selectedMinutes: '0',
    selectedSeconds: '5',
  }

  interval = null;

  /**
   * called everytime component updates, used to prevent timer from going below 0.
   * @param {*} prevProp 
   * @param {*} prevState 
   */
  componentDidUpdate(prevProp, prevState) {
    if (this.state.remainingSeconds === 0 && prevState.remainingSeconds !== 0) {
      this.stop()
      Vibration.vibrate(1)
    }
  }

  /**
   * 
   */
  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  /**
   * Format number to 2 digits with a leading zero if only 1 digit
   * @param {string} number 
   */
  formatNumber(number) {
    return ("0" + number).slice(-2)
  }

  /**
   * gets the time remaining in seconds and converts it to minutes & seconds
   * @param {Int} time (seconds)
   */
  getRemaining(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    return {
      minutes: this.formatNumber(minutes),
      seconds: this.formatNumber(seconds)
    }
  }

  stop = () => {
    // Set isRunning to false and clear all older data
    clearInterval(this.interval);
    this.interval = null;
    this.setState({
      remainingSeconds: 5,
      isRunning: false
    })
  }

  start = () => {
    // Set initial time to start counting down
    this.setState(state => ({
      remainingSeconds: parseInt(state.selectedMinutes) * 60 + parseInt(state.selectedSeconds),
      isRunning: true
    }))

    // This is what ticks the time down one second at a time. 
    this.interval = setInterval(() => {
      this.setState(state => ({
        remainingSeconds: state.remainingSeconds - 1
      }))
    }, 1000)
  }

  /**
   * Render the Time Picker when not currently running a timer.
   */
  renderPickers = () => {
    return (
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          itemStyle={styles.pickerItem}
          selectedValue={this.state.selectedMinutes}
          mode='dropdown'
          onValueChange={itemValue => {
            this.setState({ selectedMinutes: itemValue })
          }}
        >
          {AVAILABLE_MINUTES.map(value => (
            <Picker.Item key={value} label={value} value={value} />
          ))}
        </Picker>
        <Text style={styles.pickerItem}>minutes</Text>
        <Picker
          style={styles.picker}
          itemStyle={styles.pickerItem}
          selectedValue={this.state.selectedSeconds}
          mode='dropdown'
          onValueChange={itemValue => {
            this.setState({ selectedSeconds: itemValue })
          }}
        >
          {AVAILABLE_SECONDS.map(value => (
            <Picker.Item key={value} label={value} value={value} />
          ))}
        </Picker>
        <Text style={styles.pickerItem}>seconds</Text>
      </View>
    )
  }

  render() {
    const { minutes, seconds } = this.getRemaining(this.state.remainingSeconds)

    return (
      <View style={styles.container} >
        <StatusBar barStyle='light-content' />
        {this.state.isRunning ? (
          <Text style={styles.timerText}>{minutes}:{seconds}</Text>
        ) : this.renderPickers()}
        {!this.state.isRunning ? (
          <TouchableOpacity onPress={this.start} style={styles.button}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        ) : (
            <TouchableOpacity onPress={this.stop} style={[styles.button, styles.buttonStop]}>
              <Text style={[styles.buttonText, styles.buttonTextStop]}>Stop</Text>
            </TouchableOpacity>
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 30,
    borderWidth: 10,
    borderColor: '#89AAFF',
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 2,
    // Align horizontally
    alignItems: 'center',
    // Align vertically
    justifyContent: 'center',
  },
  buttonStop: {
    borderColor: '#FF851B'
  },
  buttonText: {
    fontSize: 45,
    color: '#89AAFF'
  },
  buttonTextStop: {
    color: '#FF851B',
  },
  timerText: {
    color: '#FFF',
    fontSize: 90,
  },
  picker: {
    width: 50,
    ...Platform.select({
      android: {
        color: '#FFF',
        backgroundColor: '#000',
        marginLeft: 10,
      }
    })
  },
  pickerItem: {
    color: '#FFF',
    fontSize: 20,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
