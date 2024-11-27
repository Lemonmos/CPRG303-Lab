import { View, Text, Button } from "react-native";
import React from "react";
import MainLayout from "../layouts/mainlayout";
import TodoForm from "../component/todoform.js";
import TodoList from "../component/todolist.js";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
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
    <MainLayout>
      <TodoForm addTask={addTask} style={{ flex: 1 }} />
      <TodoList tasks={tasks} />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
        testID="button"
      />
    </MainLayout>
  );
};

export default HomeScreen;
