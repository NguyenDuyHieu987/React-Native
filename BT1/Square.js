import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Square = ({ text, color }) => {
  return (
    <View style={{ ...styles.squareContainer, backgroundColor: color }}>
      <Text>{text}</Text>
    </View>
  );
};

export default Square;

const styles = StyleSheet.create({
  squareContainer: {
    height: 80,
    width: 80,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
