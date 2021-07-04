/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import hamburger from '../../assets/hamburger_icon.svg'
const Dashboard = () => {
  return (
    <View style={styles.root}>
      <View style={styles.navbar}>
        <View style={styles.menu}>
          <Image
            style={styles.logo}
            source={require('../../assets/hamburger_icon.svg')}
          /></View>
        <View style={styles.header}><Text style={styles.headerT}>Invertir</Text></View>
      </View>
      <View style={styles.body}></View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'blue',
    backgroundColor: '#E5E5E5',
  },
  navbar: {
    flex: 1,
    backgroundColor: 'pink',
    flexDirection: 'row',
    alignContent: 'space-between',
  },
  menu: {
    flex: 0.5,
    backgroundColor: '#000',
  },
  header: {
    flex: 3,
    backgroundColor: 'red',
    textAlignVertical: 'center',
  },
  headerT: {
    fontSize: 23,
    fontWeight: '100',
    top: 20,
    textAlign: 'center',
    color: '#000'
  },
  body: {
    flex: 10
  }
});
