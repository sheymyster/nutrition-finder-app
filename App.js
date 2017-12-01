import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.box1}>
            <Text>Hello there!</Text>
          </View>
          <View style={styles.box2}>
            <Button onPress={() => {
              Alert.alert("You tapped the button!");  }}
              title="Press Me"><Text>PRESS ME</Text></Button>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  box1: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
