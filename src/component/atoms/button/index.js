import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export const AppButton = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.root}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    padding:20,
    borderRadius:10,
    marginVertical:10
  },
});
