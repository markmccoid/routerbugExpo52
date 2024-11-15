import { View, Text, SafeAreaView, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import { useRoute } from "@react-navigation/native";

const IndexRoute = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 20 }}>Index Route</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10 }}>
        <TouchableOpacity onPress={() => router.push("./test/routepush")}>
          <Text
            style={{
              fontSize: 18,
              color: "blue",
              padding: 3,
              borderWidth: 1,
              backgroundColor: "lightgray",
            }}
          >
            Test router.push
          </Text>
        </TouchableOpacity>
        <Link
          href={{
            pathname: "./test/[id]",
            params: { id: "Route 1" },
          }}
          push
          style={{ padding: 3, borderWidth: 1, backgroundColor: "lightgray" }}
        >
          <Text style={{ fontSize: 18, color: "red" }}>Test Link Push</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default IndexRoute;
