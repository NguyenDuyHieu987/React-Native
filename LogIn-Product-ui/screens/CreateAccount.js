import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Input from '../components/Input';
import Btn from '../components/Btn';
import axios from 'axios';

const CreateAccount = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const setData = async () => {
    if (email.length == 0 || password.length == 0) {
      alert.alert('Warning', 'Please write your email address or password');
      return;
    } else {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!regex.test(email)) {
        Alert.alert('Warning', 'Please write exactly one email address');
        return;
      } else {
        try {
          await axios
            .post('http://192.168.86.6:3000/login/insertuser', {
              name: email,
              password: password,
            })
            .then((response) => {
              if (response.data) {
                Alert.alert('Notify', 'Signup successful');
              }
            })
            .catch((e) => {
              if (axios.isCancel(e)) return;
            });
        } catch (error) {
          console.log(error);
        }
      }
    }
  };
  return (
    <View style={{ flex: 1, paddingHorizontal: 30, marginTop: 100 }}>
      <Text style={{ fontSize: 30, color: '#2980b9', marginBottom: 20 }}>
        Create New Account
      </Text>
      <View style={{ marginBottom: 50 }}>
        <Input placeholder="Full Name" data={fullName} setData={setFullName} />
        <Input
          placeholder="Phone Number"
          data={phoneNumber}
          setData={setPhoneNumber}
        />
        <Input placeholder="E-Mail address" data={email} setData={setEmail} />
        <Input placeholder="Password" data={password} setData={setPassword} />
      </View>
      <Btn
        title="Sign Up"
        color="#1e3799"
        handlePress={() => {
          setData();
        }}
      />
    </View>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({});
