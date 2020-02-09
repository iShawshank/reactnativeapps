import React from 'react';
import { ScrollView, StyleSheet, Button, StatusBar } from 'react-native';

import spaceQuestions from '../data/space';
import westernsQuestions from '../data/westerns';
import computerQuestions from '../data/computers';
import { RowItem } from '../components/RowItems';

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // }
})

export default ({ navigation }) => (
  <ScrollView style={styles.container}>
    <StatusBar barStyle='dark-content' />
    <RowItem
      name='Space'
      color='#36baf0'
      onPress={() => navigation.navigate('Quiz', {
        title: 'Space',
        questions: spaceQuestions,
        color: '#36baf0'
      })}
    />
    <RowItem
      name='Westerns'
      color='#799496'
      onPress={() => navigation.navigate('Quiz', {
        title: 'Westerns',
        questions: westernsQuestions,
        color: '#799496'
      })}
    />
    <RowItem
      name='Computer'
      color='#49475B'
      onPress={() => navigation.navigate('Quiz', {
        title: 'Computer',
        questions: computerQuestions,
        color: '#49475B'
      })} />
    {/* <Button title='Go to next screen' onPress={() => navigation.navigate('Quiz')} /> */}

  </ScrollView>
)