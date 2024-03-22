import React from 'react';
import { ScrollView, View, Text, StyleSheet, AccessibilityInfo } from 'react-native';
import { Button } from './Button';

const benefits = [
  {
    key: 'supportDevices',
    title: 'Support devices',
    description: 'We cover costs towards the cervical collar, braces, belts etc.'
  },
  {
    key: 'disposables',
    title: 'Cost of Disposables',
    description: 'Go cashless with in-built coverage for disposable items like buds, gloves, nebulization kits and other consumables during hospitalisation.'
  },
  {
    key: 'kits',
    title: 'Cost of Kits',
    description: 'We cover cost for delivery kit, orthokit and recovery kit.'
  },
  {
    key: 'procedureCharges',
    title: 'Procedure Charges',
    description: 'We cover costs towards gauze, cotton, crepe bandage, surgical tape etc.'
  }
];

const BenefitComponent: React.FC = () => {
  return (
    <View style={styles.container} accessible={true}>
      <View style={styles.headerContainer}>
        <Text
          style={styles.header}
          accessibilityRole="header"
     aria-level="1"
        >
          So Much Benefits
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
        accessible={true}
        accessibilityLabel="Scrollable benefits"
      >
        {benefits.map(({ title, description }, index) => (
          <View
            style={styles.card}
            key={index}
            accessible={true}
            accessibilityRole="summary"        accessibilityLabel={`${title}. ${description}`}
          >
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardDescription}>{description}</Text>
          </View>
        ))}

      </ScrollView>

      <View style={styles.buttonContainer}>
        <Button
          title="Buy online"
          onPress={() => {
            console.log("Buy online pressed");
       AccessibilityInfo.announceForAccessibility('Buy online button pressed.');
          }}
          accessibilityLabel="Buy online"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 5,
  },
  headerContainer: {
    padding: 10,
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 25,
    marginVertical: 5,
    textAlign: 'center',
  },
  scrollViewContent: {
    padding: 16,
  },
  card: {
    borderTopColor: 'red',
    borderTopWidth: 2,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 8,
    width: 250,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
  },
  buttonContainer: {
    paddingTop: 10,
    padding: 15,
  },
});

export default BenefitComponent;
