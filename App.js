import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Card from './components/Card';

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
        {[1, 2, 3].map((number, i) => {
          return <Card key={i} title={`Hello, I'm a card no. ${number}`} />;
        })}
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
