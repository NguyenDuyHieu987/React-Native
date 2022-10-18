import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
} from 'react-native';
import React, { useState } from 'react';

import styles from './InputStyle.js';
import { Ionicons } from '@expo/vector-icons';

const Input = ({ onAddTask }) => {
  const [task, setTask] = useState('');
  const AddTask = () => {
    if (task.length === 0) {
      Alert.alert('Thông Báo', 'Vui lòng nhập đầy đủ thông tin', [
        {
          text: 'OK',
          onPress: () => {},
        },
      ]);
      return false;
    }
    onAddTask(task);
    setTask('');
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={10}
      style={styles.AddForm}
    >
      <TextInput
        value={task}
        style={styles.textInput}
        placeholder="Your task..."
        onChangeText={(text) => {
          setTask(text);
        }}
      />
      <TouchableOpacity onPress={AddTask}>
        <View style={styles.AddCircle}>
          <Ionicons name="add" size={30} color="white" />
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Input;
