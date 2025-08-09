import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Button } from 'react-native'
import Heading from './Heading';
import Input from './Input'
import TodoList from './TodoList';
import TabBar from './TabBar';

let todoIndex = 0

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };
    this.setType = this.setType.bind(this)
    this.toggleComplete = this.toggleComplete.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
  }

  setType (type) {
  this.setState({ type })
  }

  deleteTodo(todoIndex) {
    let { todos } = this.state
    todos = todos.filter((todo) => todo.todoIndex !== todoIndex)
    this.setState({ todos })
  }
  toggleComplete(todoIndex) {
    let todos = this.state.todos
    todos.forEach((todo) => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete
      }
    })
    this.setState({ todos })
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
    const { todos, inputValue, type } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={text => this.inputChange(text)}
          />
          <TodoList toggleComplete = {this.toggleComplete}
                    deleteTodo = {this.deleteTodo}
                    todos={todos}
                    type={type} />
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
        <TabBar type={type} setType={this.setType} />
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