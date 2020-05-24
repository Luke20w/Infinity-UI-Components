import React from "react";
import { TouchableOpacity, Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import UIText from "./UIText";

export default function UICard(props) {
  const renderDate = () =>
    props.date ? (
      <UIText
        text={props.date}
        type="subtitle"
        style={{ alignSelf: "flex-end", marginRight: 20 }}
      />
    ) : null;

  const renderSubtitle = () =>
    props.subtitle ? <UIText text={props.subtitle} color="white" /> : null;

  const renderImage = () =>
    props.image ? (
      <Image
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          marginRight: 15,
        }}
        source={props.image}
      />
    ) : null;

  return (
    <TouchableOpacity
      style={[{ width: "100%", marginTop: 10 }, props.style]}
      disabled={props.onPress || props.onLongPress ? false : true}
      onPress={props.onPress}
      onLongPress={props.onLongPress}
    >
      {renderDate()}
      <LinearGradient
        colors={[global.gradientColor1, global.gradientColor2]}
        start={[0, 1]}
        end={[1, 0]}
        style={[
          {
            borderRadius: 25,
            padding: 20,
            flexDirection: "row",
          },
          props.style,
        ]}
      >
        {renderImage()}
        <View style={props.textViewStyle}>
          <UIText text={props.title} type="title" color="white" />
          {renderSubtitle()}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}
