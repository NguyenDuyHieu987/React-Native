import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import LoginFaceBookScreen from './LoginFaceBookScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LoginFaceBookScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
