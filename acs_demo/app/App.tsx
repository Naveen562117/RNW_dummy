
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Screen1, Screen2, Screen3, Screen4, Screen5 } from './Screens';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Screen1" component={Screen1} options={{ headerShown: false }} />
          {/* <Stack.Screen name="Screen2" component={Screen2} options={{ headerShown: false }} />
            <Stack.Screen name="Screen3" component={Screen3} options={{ headerShown: false }} />
            <Stack.Screen name="Screen4" component={Screen4} options={{ headerShown: false }} />
            <Stack.Screen name="Screen5" component={Screen5} options={{ headerShown: false }} /> */}

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;