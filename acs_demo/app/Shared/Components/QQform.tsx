import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import CustomDropdown from './CustomDropdown';
import { Button } from './Button';

const QQForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [insuranceType, setInsuranceType] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [insuranceError, setInsuranceError] = useState('');

  const handleSubmit = () => {
    // Perform form validation and submit the data
    let isValid = true;

    if (!name) {
      setNameError('Please enter your name');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!email) {
      setEmailError('Please enter your email');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!phoneNumber) {
      setPhoneError('Please enter your phone number');
      isValid = false;
    } else if (!validatePhoneNumber(phoneNumber)) {
      setPhoneError('Please enter a valid phone number');
      isValid = false;
    } else {
      setPhoneError('');
    }

    if (!insuranceType) {
      setInsuranceError('Please select an insurance type');
      isValid = false;
    } else {
      setInsuranceError('');
    }

    if (isValid) {
      // Submit the form data
      console.log('Form submitted:', { name, email, phoneNumber, insuranceType });
    }
  };

  const validateEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    // Simple phone number validation regex
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  return (
    <View style={styles.container}>
      <View accessible={true}
        style={{ paddingTop: 10, paddingHorizontal: 15 }}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={[styles.input, nameError ? styles.inputError : null]}
          onChangeText={setName}
          value={name}
          placeholder="Enter your name"
          accessibilityLabel="Name"
        />
        {nameError ? <Text style={styles.errorText}>error:{nameError}</Text> : null}
      </View>
      <View accessible={true}
        style={{ paddingTop: 10, paddingHorizontal: 15 }}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={[styles.input, emailError ? styles.inputError : null]}
          onChangeText={setEmail}
          value={email}
          placeholder="Enter your email"
          accessibilityLabel="Email"
          keyboardType="email-address"
        />
        {emailError ? <Text style={styles.errorText}>error:{emailError}</Text> : null}
      </View>
      <View accessible={true}
        style={{ paddingTop: 10, paddingHorizontal: 15 }}>
        <Text style={styles.label}>Phone Number:</Text>
        <TextInput
          style={[styles.input, phoneError ? styles.inputError : null]}
          onChangeText={setPhoneNumber}
          value={phoneNumber}
          placeholder="Enter your phone number"
          accessibilityLabel="Phone Number"
          keyboardType="phone-pad"
        />
        {phoneError ? <Text style={styles.errorText}>error:{phoneError}</Text> : null}
      </View>
      <CustomDropdown />
      <View accessible={true}
        style={{ paddingTop: 10, paddingHorizontal: 15 }}>
        {insuranceError ? <Text style={styles.errorText}>error:{insuranceError}</Text> : null}
      </View>
      <View style={{ paddingTop: 10, padding: 15 }}>
        <Button
          title="GET QUOTE NOW!"
          onPress={handleSubmit}
          accessibilityLabel="GET QUOTE NOW"
          accessibilityRole="button"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e5f6f7',
    width: '100%',
    borderRadius: 15,
    shadowColor: '`#000`',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderRadius: 5,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  dropdownContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  dropdownOption: {
    padding: 10,
  },
  dropdownOptionText: {
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
});

export default QQForm;