
import * as React from 'react';
import { View,   ScrollView } from 'react-native';
import { P1_BackGroung } from '../../Shared/Assets';
import { SafeAreaView } from 'react-native-safe-area-context';
import QQform from '../../Shared/Components/QQform';
import FeatureList from '../../Shared/Components/FeatureList';
import BenefitComponent from '../../Shared/Components/BenefitComponent';
import TrustList from '../../Shared/Components/TrustList';

export const Screen1 = ({ navigation }: any) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'flex-end' }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          // flex: 1,
          // flexGrow: 1,
        }}>
        <View style={{
          // backgroundColor:'red',
          padding : 16
        }}>

          <QQform></QQform>
        </View>
        <View style={{
          // backgroundColor:'red',
          padding: 16
        }}>

          <FeatureList></FeatureList>
        </View>

        <View style={{
          // backgroundColor:'red',
          paddingVertical: 16
        }}>

          <BenefitComponent></BenefitComponent>
        </View>

        <View style={{
          // backgroundColor:'red',
          // padding:10
        }}>

          <TrustList></TrustList>
        </View>


      </ScrollView>

    </SafeAreaView>
  );
}  