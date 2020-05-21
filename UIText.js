import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function UIText(props) {
  return (
    <TouchableOpacity
      style={[{ alignSelf: "flex-start" }, props.style]}
      disabled={props.onPress ? false : true}
      onPress={props?.onPress}
    >
      <Text
        style={[
          {
            fontFamily:
              props.type == "header" ||
              props.type == "header2" ||
              props.type == "title" ||
              props.type == "button"
                ? global.boldFontFamily
                : global.fontFamily,
            fontSize:
              props.type == "header"
                ? 35
                : props.type == "header2"
                ? 25
                : props.type == "title"
                ? 18
                : props.type == "button"
                ? 15
                : 13,
            color: props.color
              ? props.color
              : global.dark
              ? "white"
              : props.type == "subtitle" || props.type == "button"
              ? "grey"
              : "black",
          },
          props.textStyle,
        ]}
      >
        {props.text || "Placeholder"}
      </Text>
    </TouchableOpacity>
  );
}
