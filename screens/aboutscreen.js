import { View, Text, Button } from "react-native";
import React from "react";
import MainLayout from "../layouts/mainlayout";
import { useNavigation } from "@react-navigation/native";

const AboutScreen = () => {
  const navigation = useNavigation();
  return (
    <MainLayout>
      <Text>About Screen</Text>
      <Text>Project Name: </Text>
      <Text>Author Name:</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </MainLayout>
  );
};

export default AboutScreen;