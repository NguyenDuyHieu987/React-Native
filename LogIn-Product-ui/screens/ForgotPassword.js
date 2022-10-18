import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Input from '../components/Input';
import Btn from '../components/Btn';

const ForgotPassword = () => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 30, marginTop: 100 }}>
      <Text style={{ fontSize: 30, color: '#2980b9', marginBottom: 20 }}>
        Forgot Password
      </Text>
      <View style={{ marginBottom: 50 }}>
        <Input placeholder="E-Mail or Phone Number" />
      </View>
      <View>
        <Btn title="Confirm" color="#1e3799" />
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({});
