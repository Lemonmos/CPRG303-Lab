import { View, Text } from "react-native";
import React from "react";
import TodoForm from "./todoform.js";
import TodoList from "./todolist.js";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/homescreen.js";
import AboutScreen from "../screens/aboutscreen.js";

const App = () => {
  const Stack = createStackNavigator();
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);
  const addTask = (task) => {
    // Implement the logic to add a new task
    if (task) {
      if (tasks.includes(task)) {
        alert("Task already exists");
      } else {
        setTasks([...tasks, task]);
      }
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
      {/* <View>
        <TodoForm addTask={addTask} />
        <TodoList tasks={tasks} />
      </View> */}
    </NavigationContainer>
  );
};

export default App;
