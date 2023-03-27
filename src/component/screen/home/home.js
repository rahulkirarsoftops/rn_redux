import React, {useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchAllTodoAction} from '../../../redux/action';

export const Home = ({navigation}) => {
  let allTodos = useSelector(state => state?.todoReducer?.allTodos);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTodoAction());
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{alignItems: 'center', marginVertical: 20}}>
        <Text>Home</Text>
      </View>
      <ScrollView>
        {allTodos?.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.todoContainer}
              onPress={() => navigation.navigate('todo-details', item?.id)}>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {},
  todoContainer: {borderWidth: 1, padding: 5, margin: 5},
});
