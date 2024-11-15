import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const Layout1 = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="[id]" />
      <Stack.Screen name="other" />
    </Stack>
  );
};

export default Layout1;
