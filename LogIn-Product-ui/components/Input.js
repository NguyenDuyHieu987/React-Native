import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import React from 'react';

const { width } = Dimensions.get('window');
const Input = ({ placeholder, data, setData }) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={data}
        onChangeText={(value) => setData(value)}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    paddingVertical: 10,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 20,
    paddingLeft: 20,
  },
});
