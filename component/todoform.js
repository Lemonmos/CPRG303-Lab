import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const TodoForm = ({ addTask }) => {
  const [taskText, setTaskText] = React.useState("");
  const [taskList, setTaskList] = React.useState([]);

  const handleAddTask = () => {
    const randomIndex = Math.floor(Math.random() * taskList.tasks.length);
    const randomTask = taskList.tasks[randomIndex];
    setTaskText(randomTask);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("../src/data/tasks.json");
      const data = await response.json();
      setTaskList(data);
    }
    fetchData();
  }, []);
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <View style={styles.button}>
        <Button
          title="Generate Random Task"
          onPress={() => {
            handleAddTask();
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          style={styles.button}
          title="Add"
          onPress={() => {
            addTask(taskText);
            setTaskText("");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  button: {
    flex: 1,
    marginRight: 10,
  },
});

export default TodoForm;
