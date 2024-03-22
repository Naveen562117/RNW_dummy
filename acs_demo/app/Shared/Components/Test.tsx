import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const Test = () => {
  return (
    <TouchableOpacity
          onPress={() => {
          }}
          style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            height:800,
            backgroundColor: "#fff" ,
          }}>
          <Text style={styles.highlight}>App.tsx</Text>
        </TouchableOpacity>
  );
};
export default Test;

const styles = StyleSheet.create({});
