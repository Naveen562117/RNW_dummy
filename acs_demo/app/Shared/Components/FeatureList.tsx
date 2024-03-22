import { Image, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { Button } from "./Button";
import { P1_BackGroung } from "../Assets";

const FeatureList = () => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container} accessible={true}>
      <View style={styles.headerContainer}>
        <Text
          style={styles.header}
          accessibilityRole="header"
          accessibilityLabel="Why choose optima secure"
        >
          Why Choose HDFC ERGO Optima Secure
        </Text>
      </View>
      <View
        style={[
          styles.itemContainer,
          {
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            elevation: 8,
            flexDirection: width < 400 ? "column" : "row",
          },
        ]}
      >
        {[
          {
            key: 1,
            icon: "",
            title: "~12,000+ Cashless Healthcare Network ",
            backgroundColor: "#f1f1f1",
          },
          {
            key: 2,
            icon: "",
            title: "100% Claim Settlement Ratio",
            backgroundColor: "#fff",
          },
          {
            key: 3,
            icon: "",
            title: "No Cost Installment Benefit",
            backgroundColor: "#f1f1f1",
          },
          {
            key: 4,
            icon: "",
            title: "Additional 5% Online Discount^*",
            backgroundColor: "#fff",
          },
          {
            key: 5,
            icon: "",
            title: "Covers Non Medical Expense",
            backgroundColor: "#f1f1f1",
          },
          {
            key: 6,
            icon: "",
            title: "1.5 Crore+ Happy Customers@ ",
            backgroundColor: "#fff",
          },
        ].map((obj, index) => {
          return (
            <View
              key={index}
              style={[styles.item,
              {
                backgroundColor: obj.backgroundColor, flexDirection: width < 400 ? "row" : "column",
              },
              ]}
              accessibilityRole="text"
            >
              <Image
                source={P1_BackGroung}
                style={{
                  height: 30,
                  width: 30,
                  resizeMode: "contain",
                }}
              />
              <View style={styles.itemTitleContainer}>
                <Text style={styles.itemTitle} color="emerald.500" fontSize="md">
                  {obj.title}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={"Buy online"}
          onPress={() => console.log("hello world")}
          accessibilityLabel="Buy online"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 5,
  },
  headerContainer: {
    padding: 10,
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 25,
    marginVertical: 5,
    textAlign: "center",
  },
  itemContainer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  item: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  itemTitleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemTitle: {
    fontSize: 16,
    textAlign: "center",
  },
  buttonContainer: {
    paddingTop: 35,
    padding: 15,
  },
});

export default FeatureList;
