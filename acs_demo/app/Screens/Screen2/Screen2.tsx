
import * as React from 'react';
import { View, Text, Image } from 'react-native';
 import {   P2_background } from '../../Shared/Assets';
  
export const  Screen2 = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
      <Image source={P2_background} style={{ flex: 1, position: 'absolute' }}></Image>
      <Text>Home Screen</Text>
    </View>
  );
}
