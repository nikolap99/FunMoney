import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Card = ({ title }) => {
  return (
    <View style={styles.card}>
      <Text>Hello, I'm a card no. {title}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
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
});
