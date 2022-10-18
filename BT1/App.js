import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';
import Square from './Square';
export default function App() {
  const handlePress = () => {
    Alert.alert('Hello');
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Square text={'Square 1'} color={'yellow'} />
      <Square text={'Square 2'} color={'blue'} />
      <Square text={'Square 3'} color={'red'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
