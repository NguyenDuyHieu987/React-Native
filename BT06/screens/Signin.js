import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Input from '../components/Input';
import Btn from '../components/Btn';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signin = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem('UserData').then((value) => {
        let user = JSON.parse(value);
        if (user.Email == email && user.Password == password) {
          navigation.navigate('home');
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const login = async () => {
    if (email.length == 0 || password.length == 0) {
      Alert.alert('Warning', 'Please write your email address or password');
    } else {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!regex.test(email)) {
        Alert.alert('Warning', 'Please write exactly one email address');
      } else {
        AsyncStorage.getItem('UserData').then((value) => {
          let user = JSON.parse(value);
          if (user.Email == email && user.Password == password) {
            console.log(value);
            navigation.navigate('home');
          } else {
            Alert.alert('Warning', 'Password is incorrect');
          }
        });
      }
    }
  };
  return (
    <View style={{ flex: 1, paddingHorizontal: 30, marginTop: 100 }}>
      <Text style={{ fontSize: 30, color: '#2980b9', marginBottom: 20 }}>
        Sign In
      </Text>
      <View style={{ marginBottom: 50 }}>
        <Input
          placeholder="E-Mail or Phone Number"
          data={email}
          setData={setEmail}
        />
        <Input placeholder="Password" data={password} setData={setPassword} />
      </View>
      <View>
        <Btn
          title="Log In"
          color="#2980b9"
          handlePress={() => {
            login();
          }}
        />
        <Text style={{ textAlign: 'center', fontSize: 20, marginVertical: 50 }}>
          OR
        </Text>
        <Btn
          handlePress={() => {
            navigation.navigate('forgotpassword');
          }}
          title="Forgot Password ?"
          color="#1e3799"
        />
      </View>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({});
