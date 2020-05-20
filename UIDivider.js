import React from "react";
import { TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-eva-icons";

export default function UIDivider(props) {
  return (
    <View
      style={{
        width: "100%",
        height: props.margin * 2 || 20,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          height: 1,
          backgroundColor: "lightgrey",
        }}
      />
    </View>
  );
}
