import React from "react";
import { View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-eva-icons";

export default function UICircleButton(props) {
  return (
    <TouchableOpacity
      style={[{ position: "absolute", bottom: 30, right: 30 }, props.style]}
      onPress={props?.onPress}
    >
      <LinearGradient
        colors={[global.gradientColor1, global.gradientColor2]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          width: props.width || 65,
          height: props.height || 65,
          borderRadius: 32.5,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon name={props.icon || "plus"} fill="white" width={30} height={30} />
      </LinearGradient>
    </TouchableOpacity>
  );
}
