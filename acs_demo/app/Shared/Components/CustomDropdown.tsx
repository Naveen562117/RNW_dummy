import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity, 
  StyleSheet,
} from 'react-native';

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const options = ['Individual', 'Family', 'None'];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      setIsOpen(true);
    } else if (event.key === 'ArrowUp') {
      setIsOpen(false);
    } else if (event.key === 'Enter') {
      setIsOpen(!isOpen);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Insurance Type:</Text>

      <TouchableWithoutFeedback onPress={() => setIsOpen(!isOpen)} onKeyDown={handleKeyDown}>
        <View
          style={[
            styles.dropdownHeader,
            { borderColor: isOpen ? 'blue' : 'gray', borderWidth: isOpen ? 2 : 1 },
          ]}
          accessible={true}
          accessibilityRole="combobox"
          accessibilityLabel="Insurance Type"
          accessibilityExpanded={isOpen}
        >
          <Text style={styles.dropdownHeaderText}>{selectedOption || 'Select an option'}</Text>
        </View>
      </TouchableWithoutFeedback>

      {isOpen && (
        <View style={styles.dropdownOptionsContainer}>
          {options.map((option) => (
            <TouchableOpacity
              key={option}
              onPress={() => handleOptionSelect(option)}
              accessibilityLabel={option}
            >
              <View style={styles.dropdownOption}>
                <Text style={styles.dropdownOptionText}>{option}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dropdownHeader: {
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  dropdownHeaderText: {
    fontSize: 16,
  },
  dropdownOptionsContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
  },
  dropdownOption: {
    padding: 10,
  },
  dropdownOptionText: {
    fontSize: 16,
  },
});

export default CustomDropdown;
