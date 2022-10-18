import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Btn from '../components/Btn';
import Input from '../components/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Home = ({ navigation, route }) => {
  const [email, setEmail] = useState(route.params.email);
  const [password, setPassword] = useState(route.params.password);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      axios
        .post(`http://192.168.86.6:3000/login/getuser`, {
          email: email,
          password: password,
        })
        .then((response) => {
          setUserId(response.data.id);
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
        axios
          .post(`http://192.168.86.6:3000/login/updateuser/${userId}`, {
            password: password,
          })
          .then((response) => {
            if (response.data) {
              Alert.alert('Success!', 'Your data has been updated.');
            }
          })
          .catch((e) => {
            if (axios.isCancel(e)) return;
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.clear();

      axios
        .post(`http://192.168.86.6:3000/login/deleteuser/${userId}`)
        .then((response) => {
          if (response.data) {
            navigation.navigate('sigin');
          }
        })
        .catch((e) => {
          if (axios.isCancel(e)) return;
        });
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
