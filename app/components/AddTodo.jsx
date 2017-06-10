const React = require('react');

const AddTodo = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    const newTodo = this.refs.todoText.value;
    if(newTodo.length > 0){
      this.refs.todoText.value = '';
      this.props.onAdd(newTodo);
    } else {
      this.refs.todoText.focus();
    }
  },

  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit}>
          <input type="text" ref="todoText" placeholder="Enter todo" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
