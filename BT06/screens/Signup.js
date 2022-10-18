import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Btn from '../components/Btn';
import Logo from '../components/Logo';

const Signup = ({ navigation }) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View>
        <Logo />
      </View>
      <View
        style={{ marginTop: 30, paddingHorizontal: 40, alignItems: 'center' }}
      >
        <Text
          style={{
            textAlign: 'center',
            marginHorizontal: 40,
            fontSize: 24,
            marginBottom: 30,
            color: '#2980b9',
          }}
        >
          Welcome to your
        </Text>
        <Text style={{ textAlign: 'center', marginBottom: 50 }}>
          Welcome to your. Build your social network in minutes{' '}
        </Text>
        <Btn
          title="Log in"
          color="#2980b9"
          handlePress={() => {
            navigation.navigate('sigin');
          }}
        />
        <Btn
          title="Sign up"
          color="gray"
          handlePress={() => {
            navigation.navigate('createaccount');
          }}
        />
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
