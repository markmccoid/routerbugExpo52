import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, useGlobalSearchParams } from "expo-router";

const IDRoute = () => {
  const { id } = useGlobalSearchParams();
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  return (
    <SafeAreaView>
      <Text style={{ fontSize: 20 }}>Dynamic Route</Text>
      <Text style={{ fontSize: 18 }}>{id}</Text>
      <View style={{ flexDirection: "row" }}>
        <Link
          href={{
            pathname: "/(tabs)/test/[id]",
            params: { id: `Route-${generateRandomNumber()}` },
          }}
          push
          style={{ padding: 3, borderWidth: 1, backgroundColor: "lightgray" }}
        >
          <Text style={{ fontSize: 18, color: "blue" }}>Go To Next Page</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default IDRoute;
