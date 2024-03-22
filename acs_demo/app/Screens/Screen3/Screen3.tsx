
import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
 import { P1_BackGroung } from '../../Shared/Assets';
import { SafeAreaView } from 'react-native-safe-area-context';
  
export const Screen3 = () =>{
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
      <Image source={P1_BackGroung} style={{ flex: 1, position: 'absolute' }}></Image>
      <Text>Home Screen</Text>
    </View>
  );
}

