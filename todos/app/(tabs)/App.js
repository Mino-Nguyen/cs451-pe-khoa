import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Button } from 'react-native'
import Heading from './Heading';
import Input from './Input'

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };
  }

  inputChange(inputValue) {
    console.log(' Input Value: ', inputValue);
    this.setState({ inputValue });
  }

  addTodo(inputValue) {
    if (inputValue.trim() === '') return;
    const { todos } = this.state;
    const newTodo = {
      title: inputValue,
      todoIndex: todos.length,
      completed: false
    };
    this.setState({
      todos: [...todos, newTodo],
      inputValue: ''
    });
  }

  getState = () => {
    const { todos, inputValue } = this.state;
    let stateString = `Input Value: "${inputValue}" Todos: `;

    todos.forEach((todo, index) => {
      stateString += `Title: "${todo.title}", Index: ${todo.todoIndex}, Completed: "${todo.completed ? 'True' : 'False'}"; `;
    });

    return stateString;
  };

  render() {
    const { inputValue } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={text => this.inputChange(text)}
          />
          <View
            style={styles.buttoncontainer}>
            <Button
              onPress={() => {
                this.addTodo(this.state.inputValue);
                setTimeout(() => {
                  console.log(this.getState());
                }, 0);
              }}
              style={styles.button}
              title="Submit"
              accessibilityLabel="Create new todo task"
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttoncontainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 20,

  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
})

export default App