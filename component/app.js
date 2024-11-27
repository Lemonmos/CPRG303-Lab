import { View, Text } from "react-native";
import React from "react";
import Todoform from "./todoform.js";
import Todolist from "./todolist.js";
import { useState } from "react";

const App = () => {
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
    <View>
      <Todoform addTask={addTask} />
      <Todolist tasks={tasks} />
    </View>
  );
};

export default App;
