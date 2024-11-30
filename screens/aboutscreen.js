import { View, Text, Button } from "react-native";
import React from "react";
import MainLayout from "../layouts/mainlayout";
import { useNavigation } from "@react-navigation/native";

const AboutScreen = () => {
  const navigation = useNavigation();
  //get current date
  const date = new Date();
  //format date to YYYY-MM-DD
  const formattedDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;
  return (
    <MainLayout>
      <Text>About</Text>
      <Text>Project Name: Todo List</Text>
      <Text>Author Name: Jiaping Liu</Text>
      <Text>Current Date: {formattedDate}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </MainLayout>
  );
};

export default AboutScreen;
