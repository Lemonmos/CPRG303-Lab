import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import React from "react";

const TodoList = ({ tasks }) => {
  return (
    <ScrollView>
      <Text>Todo List</Text>
      {tasks.map((task, index) => (
        <Pressable key={index}>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  completed: {
    backgroundColor: "#e0e0e0",
  },
  taskText: {
    fontSize: 16,
    color: "#000000",
  },
});

export default TodoList;
