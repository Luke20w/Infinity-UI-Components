import React from "react";
import { View, ScrollView } from "react-native";

export default function UIBackgroundView(props) {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        width: "100%",
        paddingTop: 30,
        backgroundColor: global.dark
          ? global.backgroundColor
          : global.lightBackgroundColor,
        alignItems: "center",
      }}
    >
      <ScrollView
        style={{
          width: "100%",
          alignSelf: "center",
        }}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          paddingTop: 20,
          paddingBottom: 30,
        }}
        showsVerticalScrollIndicator={false}
      >
        {props.children}
      </ScrollView>
    </View>
  );
}
