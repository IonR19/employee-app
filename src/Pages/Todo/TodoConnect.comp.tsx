import React, { Component } from "react";
import { connect, DefaultRootState } from "react-redux";
import { $CombinedState } from "redux";
import { addEmployee, removeEmployee } from "../../store";
import { RootState } from "../../store/store";

interface Props {
  todos: string[];
  addEmployee: typeof addEmployee;
  removeEmployee: typeof removeEmployee;
}
interface State {}

class TodoConnect extends Component<Props, State> {
  state = {
    todo: "",
  };

  updateState: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    this.setState({
      todo: e.target.value,
    });
  };

  componentDidUpdate() {
    console.log("TodoConnect componentDidUpdate");
  }

  render() {
    const todos = this.props.todos.filter((st) => st.length);
    return (
      <div className="card">
        <h1>Component with mapStateToProps</h1>
        <label htmlFor="todo">Add</label>
        <input id="todo" name="todo" type="text" value={this.state.todo} onChange={this.updateState} />
        <button onClick={() => this.props.addEmployee(this.state.todo)}>submit</button>
        <ol>
          {todos.map((todo, i) => (
            <li key={todo + i}>
              {1 + i} - {todo}
              <button className="delete" onClick={() => this.props.removeEmployee(todo)}></button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addEmployee,
  removeEmployee,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoConnect);
