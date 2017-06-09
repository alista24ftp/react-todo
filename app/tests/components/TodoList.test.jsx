const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');

const TodoList = require('TodoList');
const Todo = require('Todo');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    const todos = [{
      id: 1,
      text: 'do something 1'
    }, {
      id: 2,
      text: 'do something 2'
    }];
    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    const todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
    expect(todosComponents.length).toBe(todos.length);
  });
});
