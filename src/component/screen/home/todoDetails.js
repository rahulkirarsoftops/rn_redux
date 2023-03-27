import React, {useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {clearTodo, fetchTodoAction} from '../../../redux/action';

export const TodoDetails = ({navigation, route}) => {
  let id = route?.params;

  let allTodos = useSelector(state => state?.todoReducer?.todo);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodoAction(id));
    return () => dispatch(clearTodo());
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{alignItems: 'center', marginVertical: 20}}>
        <Text>Todo</Text>
      </View>

      <View style={styles.todoContainer}>
        <Text>{allTodos.title}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {},
  todoContainer: {borderWidth: 1, padding: 5, margin: 5},
});
