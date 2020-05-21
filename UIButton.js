import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-eva-icons";

export default function UIButton(props) {
  const renderCover = () =>
    props.type == "outline" ? (
      <View
        style={{
          width: 195,
          height: 45,
          borderRadius: 22.5,
          backgroundColor: global.dark ? global.backgroundColor : "white",
          position: "absolute",
        }}
      />
    ) : null;

  const renderIcon = () =>
    props.icon ? (
      <Icon
        name={props.icon}
        fill={
          props.type
            ? global.dark
              ? props.type == "white"
                ? global.accentColor
                : "white"
              : global.accentColor
            : "white"
        }
        width={25}
        height={25}
        style={{ marginRight: 10 }}
      />
    ) : null;

  return (
    <View style={[{ marginTop: 20 }, props.style]}>
      <TouchableOpacity onPress={props?.onPress}>
        <LinearGradient
          colors={
            props.type == "white"
              ? ["white", "white"]
              : [global.gradientColor1, global.gradientColor2]
          }
          start={[0, 1]}
          end={[1, 0]}
          style={{
            width: 200,
            height: 50,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          {renderCover()}
          {renderIcon()}
          <Text
            style={{
              fontFamily: global.boldFontFamily,
              fontSize: 15,
              color: props.type
                ? global.dark
                  ? props.type == "white"
                    ? global.accentColor
                    : "white"
                  : global.accentColor
                : "white",
            }}
          >
            {props.text || "Button"}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
