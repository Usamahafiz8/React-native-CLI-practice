import {useState} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

const IntroDashboard = ({ navigation }) => {
  const TodoTask = () => {
    navigation.replace('Todo');  // Directly navigate to Dashboard screen
};

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Hi, Lets manage your tasks</Text>
      <Button title="Lets Create Tasks" onPress={TodoTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titleText: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default IntroDashboard;
