
import * as React from 'react';
import { View, Text, Image } from 'react-native';
 import { P1_BackGroung } from '../../Shared/Assets'; 
 

export const Screen4 = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
      <Image source={P1_BackGroung} style={{ flex: 1, position: 'absolute' }}></Image>
      <Text>Home Screen</Text>
    </View>
  );
}