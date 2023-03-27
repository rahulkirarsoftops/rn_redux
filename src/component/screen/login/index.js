import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {AppButton, AppInput} from '../../atoms';

export const Login = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{alignItems: 'center', marginVertical: 20}}>
        <Text>Login</Text>
      </View>
      <View style={{marginHorizontal: 20}}>
        <AppInput placeholder="Email" />
        <AppInput placeholder="Password" />

        <AppButton
          onPress={() => navigation.navigate('signup')}
          title="Login"
        />
      </View>
    </SafeAreaView>
  );
};
