import React, { useState } from "react"; // Add this line
import { View, Text } from "react-native";

function MyComponent() {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>Hello from React Native! {count}</Text>
    </View>
  );
}

export default MyComponent;
