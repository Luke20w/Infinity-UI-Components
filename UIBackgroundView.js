import React from "react";
import { View } from "react-native";

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
      }}
    >
      {props.children}
    </View>
  );
}
