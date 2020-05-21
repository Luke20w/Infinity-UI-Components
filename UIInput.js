import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-eva-icons";
import UIText from "./UIText";

export default function UIInput(props) {
  const [focussed, setFocussed] = useState(false);

  const renderIcon = () =>
    props.icon ? (
      <Icon
        name={props.icon}
        fill={global.dark ? "white" : global.accentColor}
        width={25}
        height={25}
        onPress={props.onIconPress}
      />
    ) : null;

  return (
    <View style={[{ marginTop: 10 }, props.style]}>
      <UIText
        text={props.title || "Title"}
        type="title"
        style={{ marginLeft: 10, marginBottom: 5 }}
      />
      <LinearGradient
        colors={
          focussed
            ? [global.gradientColor1, global.gradientColor2]
            : ["lightgrey", "lightgrey"]
        }
        start={[0, 1]}
        end={[1, 0]}
        style={{
          width: "100%",
          padding: 2.5,
          height: props.multiline ? 100 : 50,
          borderRadius: 25,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            height: props.multiline ? 95 : 45,
            borderRadius: 22.5,
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: global.dark ? global.backgroundColor : "white",
            paddingHorizontal: 20,
          }}
        >
          <TextInput
            style={[
              {
                flex: 1,
                height: props.multiline ? 95 : 45,
                fontFamily: global.fontFamily,
                fontSize: 15,
                color: global.dark ? "white" : "black",
                textAlignVertical: "top",
                paddingTop: 12,
                paddingRight: props.icon ? 10 : 0,
              },
              props.inputStyle,
            ]}
            placeholderTextColor={global.dark ? "lightgrey" : "grey"}
            keyboardType={props.keyboardType}
            allowFontScaling={false}
            placeholder={props.placeholder}
            secureTextEntry={props.secureTextEntry}
            multiline={props.multiline}
            onChangeText={(text) => {
              props.onChangeText ? props.onChangeText(text) : null;
            }}
            onFocus={() => setFocussed(true)}
            onBlur={() => setFocussed(false)}
          />
          {renderIcon()}
        </View>
      </LinearGradient>
    </View>
  );
}
