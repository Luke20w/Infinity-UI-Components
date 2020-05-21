import React from "react";
import { ScrollView } from "react-native";

export default function UIScrollView(props) {
  return (
    <ScrollView
      style={{
        width: "100%",
        alignSelf: "center",
      }}
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: "center",
        paddingTop: 20,
        paddingBottom: 30,
      }}
      showsVerticalScrollIndicator={false}
    >
      {props.children}
    </ScrollView>
  );
}
