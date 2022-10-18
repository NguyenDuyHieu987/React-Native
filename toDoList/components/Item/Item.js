import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styleItem.js';

const Item = (props) => {
  const { number } = props;
  const numberText = number < 10 ? `0${number}` : number;
  const numberColor = number % 2 === 0 ? styles.even : styles.odd;

  return (
    <TouchableOpacity onPress={props.onDeleteTask}>
      <View style={styles.Item}>
        <View style={[styles.BoxNumber, numberColor]}>
          <Text style={styles.Number}>{numberText}</Text>
        </View>
        <Text style={styles.Info}>{props.TaskInfo}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
