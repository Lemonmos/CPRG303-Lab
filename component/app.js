import { View, Text } from "react-native";
import React from "react";
import Todoform from "./todoform.js";
import Todolist from "./todolist.js";
import { useState } from "react";

const app = () => {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);
  return (
    <View>
      <Todoform />
      <Todolist tasks={tasks} />
    </View>
  );
};

export default app;
