import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import UIText from "./UIText";

export default function UIButtonGroup(props) {
  const [selectedIndex, setSelectedIndex] = useState(props.initIndex || 0);

  return (
    <LinearGradient
      colors={[global.gradientColor1, global.gradientColor2]}
      start={[0, 1]}
      end={[1, 0]}
      style={[
        {
          width: "100%",
          height: 50,
          borderRadius: 25,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        },
        props.style,
      ]}
    >
      {props.buttons?.map((item, index) => (
        <TouchableOpacity
          key={item.title + item.index}
          style={{
            flex: 1,
            height: 45,
            borderTopLeftRadius: index == 0 ? 22.5 : 0,
            borderBottomLeftRadius: index == 0 ? 22.5 : 0,
            borderTopRightRadius: index == props.buttons.length - 1 ? 22.5 : 0,
            borderBottomRightRadius:
              index == props.buttons.length - 1 ? 22.5 : 0,
            justifyContent: "center",
            backgroundColor:
              index == selectedIndex
                ? "transparent"
                : global.dark
                ? global.backgroundColor
                : "white",
            marginLeft: index == 0 ? 2.5 : 1.5,
            marginRight: index == props.buttons.length - 1 ? 2.5 : 1.5,
          }}
          onPress={() => {
            setSelectedIndex(index);
            props.buttons[index].onPress
              ? props.buttons[index].onPress()
              : null;
          }}
        >
          <UIText
            text={props.buttons[index].title}
            type="button"
            color={
              index == selectedIndex ? "white" : global.dark ? "white" : "black"
            }
            style={{ alignSelf: "center" }}
          />
        </TouchableOpacity>
      ))}
    </LinearGradient>
  );
}
