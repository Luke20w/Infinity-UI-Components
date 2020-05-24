import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import UIText from "./UIText";
import { Icon } from "react-native-eva-icons";

export default function UINumberPicker(props) {
  const [value, setValue] = useState(props.defaultValue || 0);

  return (
    <View style={[{ alignItems: "center" }, props.style]}>
      <TouchableOpacity
        onPress={() => {
          if (!(value >= props.maximum)) {
            props.onValueChanged(value + 1);
            setValue(value + 1);
          }
        }}
      >
        <Icon
          name="arrow-ios-upward"
          fill={global.dark ? "white" : global.accentColor}
          width={40}
          height={40}
        />
      </TouchableOpacity>
      <UIText
        text={value.toString()}
        type="header2"
        style={{ alignSelf: "center", marginVertical: -10 }}
      />
      <TouchableOpacity
        onPress={() => {
          if (!(value <= props.minimum)) {
            props.onValueChanged(value - 1);
            setValue(value - 1);
          }
        }}
      >
        <Icon
          name="arrow-ios-downward"
          fill={global.dark ? "white" : global.accentColor}
          width={40}
          height={40}
        />
      </TouchableOpacity>
    </View>
  );
}
