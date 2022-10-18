import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Text style={styles.header}>
          Top Left
        </Text>
      </View>

      <View style={styles.containerCenter}>
        <View style={styles.center}>
          <Text style={styles.centerText}>
            Center
          </Text>
        </View>
      </View>
      <View style={styles.containerFooter}>
        <Text style={styles.footer} >
          Bottom Right
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  containerTop: {
    flex: 1,
    backgroundColor: 'red',
    width: '100%',
  },
  header: {
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    border: '1 solid red',
    color: '#0984e3',
    backgroundColor: '#fff',
    marginTop: 30,
    marginHorizontal: 30,
  },
  containerCenter: {
    flex: 1,
    backgroundColor: 'yellow',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    width: 150,
    height: 150,
    borderRadius: 150,
    backgroundColor: 'green',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerFooter: {
    flex: 1,
    backgroundColor: '#2980b9',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  footer: {
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#00cec9',
    borderRadius: 15,
    color: '#fff',
    display: 'flex',
    justifyContent: 'flex-end',
    marginHorizontal: 30,
    marginBottom: 30,
  }
});




