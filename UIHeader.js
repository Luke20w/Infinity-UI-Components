import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-eva-icons";
import UIText from "./UIText";
import UIDivider from "./UIDivider";

export default function UIHeader(props) {
  const renderTitle = () =>
    props.title ? <UIText text={props.title} type="header" /> : null;

  return (
    <View>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        disabled={props.init}
        style={{ opacity: props.init ? 0 : 1, marginVertical: 10 }}
      >
        <Icon
          name="arrow-back"
          fill={global.dark ? "white" : "black"}
          width={30}
          height={30}
        />
      </TouchableOpacity>
      {renderTitle()}
      <View
        style={{
          width: "100%",
          height: 10,
          borderBottomWidth: 1,
          borderColor: "lightgrey",
        }}
      />
    </View>
  );
}
