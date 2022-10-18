import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CreateAccount from './screens/CreateAccount';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ForgotPassword from './screens/ForgotPassword';
import Home from './screens/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="signup"
          component={Signup}
          options={{
            headerTitle: '',
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="createaccount"
          component={CreateAccount}
          options={{
            headerTitle: '',
            headerShown: true,
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
          }}
        />

        <Stack.Screen
          name="sigin"
          component={Signin}
          options={{
            headerTitle: '',
            headerShown: true,
          }}
        />

        <Stack.Screen
          name="forgotpassword"
          component={ForgotPassword}
          options={{
            headerTitle: '',
            headerShown: true,
          }}
        />

        <Stack.Screen
          name="home"
          component={Home}
          options={{
            headerTitle: '',
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
