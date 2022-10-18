import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Btn from '../components/Btn';
import Input from '../components/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem('UserData').then((value) => {
        if (value != null) {
          let user = JSON.parse(value);
          setEmail(user.Email);
          setPassword(user.Password);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async () => {
    if (password.length == 0) {
      Alert.alert('Warning!', 'Please write your data.');
    } else {
      try {
        var user = {
          Password: password,
        };
        await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
        Alert.alert('Success!', 'Your data has been updated.');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate('sigin');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.body}>
      <Text style={{ ...styles.text, marginTop: 50 }}>Welcome: {email} !</Text>
      <Text style={styles.text}>Password is: {password}</Text>
      <View>
        <Input
          placeholder="Enter your Password"
          data={password}
          setData={setPassword}
        />
        <View style={{ marginTop: 150 }}>
          <Btn
            title="Update"
            color="#2980b9"
            handlePress={() => {
              updateData();
            }}
          />
          <Btn
            title="Remove"
            color="#2980b9"
            handlePress={() => {
              removeData();
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    margin: 10,
  },
});

export default Home;
