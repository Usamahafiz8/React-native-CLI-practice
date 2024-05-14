import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BoardingScreens from './src/view/boarding_screens';
import IntroDashboard from './src/view/intro_dashboard';
import { StatusBar } from 'react-native';
import TodoTask from './src/view/todo_tasks';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Boarding" options={{
          headerShown: false,
        }} component={BoardingScreens} />
        <Stack.Screen name="Dashboard" options={{
          headerShown: false,

        }} component={IntroDashboard} />
        <Stack.Screen name="Todo" options={{
          title: 'Todo Task Manager',
        }} component={TodoTask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
