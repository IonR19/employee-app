import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addVodo, removeVodo } from "../../store/vodos";

interface Props {
  addVodo: typeof addVodo;
  removeVodo: typeof removeVodo;
}

const TodoHooks = (props: any) => {
  console.log("TodoHooks componentDidUpdate");
  React.useRef(() => {});

  const dispatch = useDispatch();
  const todos: string[] = useSelector<RootState>((state) => state.vodos).filter(st => st.length);
  const [todo, setTodo] = useState("");

  return (
    <div className="card">
      <h1>Component with mapStateToProps</h1>
      <label htmlFor="todo">Add</label>
      <input id="todo" name="todo" type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={() => dispatch(addVodo(todo))}>submit</button>
      <ol>
        {todos.map((todo, i) => (
          <li key={todo + i}>
            {1 + i} - {todo}
            <button className="delete" onClick={() => dispatch(removeVodo(todo))}></button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoHooks;
