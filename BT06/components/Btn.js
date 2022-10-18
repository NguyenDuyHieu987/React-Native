import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const { height, width } = Dimensions.get('window');

const Btn = ({ title, color, handlePress }) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...{
          backgroundColor: color,
          borderColor: color === 'gray' ? '#2980b9' : color,
        },
      }}
      onPress={handlePress}
    >
      <Text style={{ textAlign: 'center' }}> {title}</Text>
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    paddingVertical: 15,
    width: width / 1.3,
    borderWidth: 1,
    borderRadius: 20,
    alignSelf: 'center',
  },
});
