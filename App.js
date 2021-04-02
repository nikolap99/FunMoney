import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.header}>
        <Text style={styles.iconSelected}>Ikonica</Text>
        <Text style={styles.icon}>Ikonica</Text>
        <Text style={styles.icon}>Ikonica</Text>
      </View>
      <ScrollView style={{ marginTop: 100 }}>
        <View style={styles.card}>
          <Text>Hello World!</Text>
        </View>
        <View style={styles.card}>
          <Text>Hello World!</Text>
        </View>
        <View style={styles.card}>
          <Text>Hello World!</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    width: 400,
    height: 400,
    margin: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  header: {
    width: '100%',
    height: 100,
    backgroundColor: '#6c5ce7',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  icon: {
    color: '#fff',
    paddingHorizontal: 15,
    borderBottomColor: 'transparent',
    borderBottomWidth: 5,
  },
  iconSelected: {
    color: '#fff',
    paddingHorizontal: 15,
    borderBottomColor: '#4834d4',
    borderBottomWidth: 5,
  },
});
