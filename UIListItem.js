import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import UIText from "./UIText";
import { Icon } from "react-native-eva-icons";

export default function UIListItem(props) {
  const renderLeftItem = () =>
    props.icon ? (
      <Icon
        name={props.icon}
        fill={global.dark ? "white" : global.accentColor}
        width={25}
        height={25}
        style={{ marginRight: 10 }}
      />
    ) : props.image ? (
      <Image
        style={{ width: 35, height: 35, marginRight: 10, borderRadius: 17.5 }}
        source={props.image}
      />
    ) : null;

  const renderMore = () =>
    props.more ? (
      <Icon
        name="chevron-right"
        fill={global.dark ? "white" : "grey"}
        width={25}
        height={25}
      />
    ) : null;

  const renderSubtitle = () =>
    props.subtitle ? <UIText text={props.subtitle} /> : null;

  return (
    <View
      style={[
        {
          width: "100%",
          borderTopWidth: props.first ? 0 : 1,
          borderColor: "lightgrey",
          paddingVertical: 7,
        },
        props.style,
      ]}
    >
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        disabled={props.onPress ? false : true}
        onPress={props.onPress}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {renderLeftItem()}
          <View
            style={{
              width: "80%",
              flexWrap: "wrap",
            }}
          >
            <UIText text={props.title} type="title" />
            {renderSubtitle()}
          </View>
        </View>
        {renderMore()}
      </TouchableOpacity>
    </View>
  );
}
