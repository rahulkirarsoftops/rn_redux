import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

export const AppInput = ({...Props}) => {
  return (
    <View style={styles.root}>
      <TextInput {...Props} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderRadius: 10,
    marginVertical:10
  },
});
