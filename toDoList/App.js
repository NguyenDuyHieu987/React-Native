import React, { useState } from 'react';
import { Text, View, ScrollView, Alert } from 'react-native';

import { styles } from './AppStyle.js';
import Item from './components/Item';
import Input from './components/Input';

export default function App() {
  const [taskList, setfTaskList] = useState([]);
  const handleAddTask = (task) => {
    setfTaskList([...taskList, task]);
  };
  const handleDeleteTask = (index) => {
    Alert.alert('Thông Báo', 'Bạn có chắc chắn muốn xóa không?', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'OK',
        onPress: () => {
          let taskListTmp = [...taskList];
          taskListTmp.splice(index, 1);
          setfTaskList(taskListTmp);
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>TodoList</Text>

        <ScrollView style={styles.Items}>
          {taskList.map((item, index) => {
            return (
              <Item
                TaskInfo={item}
                number={index + 1}
                key={index}
                onDeleteTask={() => handleDeleteTask(index)}
              />
            );
          })}
        </ScrollView>

        <Input onAddTask={handleAddTask} />
      </View>
    </View>
  );
}
