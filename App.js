import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  View,
  StyleSheet
} from 'react-native';

const App = () => {
  const [message, setMessage] = useState("Hello DevOps 🚀");

  const handlePress = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();
      setMessage(data.title);
    } catch (error) {
      setMessage("Error ❌");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{message}</Text>
      <View style={styles.button}>
        <Button title="Click Me" onPress={handlePress} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  button: {
    width: 150
  }
});

export default App;
