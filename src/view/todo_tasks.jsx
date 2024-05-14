import React, { useState } from 'react';
import { Text, View, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TodoTask = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const editTask = (task) => {
    setEditingTask(task.id);
    setTaskText(task.text);
  };

  const saveTask = () => {
    setTasks(tasks.map(task => (task.id === editingTask ? { ...task, text: taskText } : task)));
    setEditingTask(null);
    setTaskText('');
  };

  const completeTask = (id) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <View style={styles.container}>
    <Text style={styles.header}>Todo Task Manager</Text>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add new task"
        value={newTask}
        onChangeText={setNewTask}
      />
      <TouchableOpacity onPress={addTask}>
        <Icon name="add" size={30} color="blue" />
      </TouchableOpacity>
    </View>
    {editingTask && (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Edit task"
          value={taskText}
          onChangeText={setTaskText}
        />
        <TouchableOpacity onPress={saveTask}>
          <Icon name="save" size={30} color="green" />
        </TouchableOpacity>
      </View>
    )}
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.taskContainer}>
          <Text
            style={[
              styles.task,
              { textDecorationLine: item.completed ? 'line-through' : 'none' },
            ]} 
          >
            {item.text}
          </Text>
          <View style={styles.buttons}>
            <TouchableOpacity onPress={() => editTask(item)}>
              <Icon name="edit" size={25} color="orange" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => completeTask(item.id)}>
              <Icon name={item.completed ? "undo" : "check"} size={25} color="green" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => removeTask(item.id)}>
              <Icon name="delete" size={25} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    marginRight: 10,
    padding: 8,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  task: {
    fontSize: 18,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
});

export default TodoTask;
