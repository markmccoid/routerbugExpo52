import { View, Text, SafeAreaView, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import { useRoute } from "@react-navigation/native";

const IndexRoute = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <Text>OTHER</Text>
    </SafeAreaView>
  );
};

export default IndexRoute;
