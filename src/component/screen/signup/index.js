import React from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import {AppButton, AppInput} from '../../atoms';

export const Signup = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{alignItems: 'center', marginVertical: 20}}>
        <Text>Sign up</Text>
      </View>
      <View style={{marginHorizontal: 20}}>
        <AppInput placeholder="Email" />
        <AppInput placeholder="Password" />

        <AppButton
          onPress={() => navigation.navigate('home')}
          title="Home"
        />
      </View>
    </SafeAreaView>
  );
};
