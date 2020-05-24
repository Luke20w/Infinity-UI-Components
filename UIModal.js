import React, { useState } from "react";
import { Modal, View, TouchableOpacity } from "react-native";
import UIText from "./UIText";
import UIDivider from "./UIDivider";

export default function UIModal(props) {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Modal
        animationType="fade"
        transparent
        visible={props.visible}
        supportedOrientations={["portrait", "landscape"]}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <TouchableOpacity
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              backgroundColor: "black",
              opacity: 0.5,
            }}
            activeOpacity={0.5}
            onPress={() => (props.setVisible ? props.setVisible(false) : null)}
          />
          <View
            style={{
              width: "80%",
              borderRadius: 25,
              backgroundColor: "white",
              paddingVertical: 20,
              paddingHorizontal: 30,
            }}
          >
            <UIText
              text={props.title}
              type="header2"
              color="black"
              style={{ alignSelf: "center" }}
            />
            <UIDivider />
            <View style={[{ alignItems: "center" }, props.style]}>
              {props.children}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
