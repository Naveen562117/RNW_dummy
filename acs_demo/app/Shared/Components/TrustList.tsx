import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from './Button';

const TrustList = () => {
  const items = [
    {
      key: 1,
      title: 'Wider Pre & Post Hospitalization',
      backgroundColor: '#fff'
    },
    {
      key: 2,
      title: 'Premium Start at 24/day*',
      backgroundColor: '#fff'
    },
    {
      key: 3,
      title: '1 claim processed every minute^^',
      backgroundColor: '#fff'
    },
    {
      key: 4,
      title: '24x7 support in 10 languages',
      backgroundColor: '#fff'
    },
    {
      key: 5,
      title: '1.5 Crore+ Happy Customers@',
      backgroundColor: '#fff'
    },
    {
      key: 6,
      title: '100% Claim Settlement Ratio^ ',
      backgroundColor: '#fff'
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header} accessibilityRole="header">So Much Trust</Text>
      <Text style={styles.text} accessibilityRole="text">
        Backed by the trust of 1.5 crore+ happy customers@ over the past 18 years. At HDFC ERGO, we consistently strive to make insurance affordable, easier, and dependable. Here, promises are kept, claims are fulfilled, and lives are nurtured with
      </Text>
      {items.map((obj) => (
        <View key={obj.key} style={[styles.itemContainer, { backgroundColor: obj.backgroundColor }]} accessibilityRole="text">
          <Text style={styles.itemTitle}>
            {obj.title}
          </Text>
        </View>
      ))}
      <View style={styles.buttonContainer}>
        <Button title="Buy online" onPress={() => console.log("hello world")} accessibilityLabel="Buy online" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 5,
    padding: 10,
  },
  header: {
    fontSize: 25,
    marginVertical: 5,
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    marginVertical: 5,
    textAlign: 'justify',
  },
  itemContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 5,
  },
  itemTitle: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    paddingTop: 10,
    padding: 15,
  },
});

export default TrustList;
