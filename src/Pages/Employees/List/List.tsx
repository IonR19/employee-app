import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store";

const List: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);
  const [value, setValue] = useState("");

  return (
    <div>
      <div className="card mb-4">
        <input type="text" className="input" value={value} onChange={(e) => setValue(e.target.value)} />
        <button
          className="button is-primary"
          onClick={() => dispatch({ type: "ADD_USER", payload: value })}
        >
          Add
        </button>
        <h1 className="title has-text-centered">Todos</h1>
        <ul>
          {todos.map((todo) => (
            <>
              <li key={todo}>
                {todo}
                <button onClick={() => dispatch({ type: "REMOVE_USER", payload: todo })}>
                  Delete me
                </button>
              </li>
            </>
          ))}
        </ul>
      </div>
      <div className="card p-4">
        <div className="columns">
          <div className="field column">
            <label className="label has-text-primary">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="civil id" />
            </div>
          </div>
          <div className="field column">
            <label className="label has-text-primary">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="civil id" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
// const mapStateToProps = (state: RootState) => ({});
//
// const mapDispatchToProps = {};
//
// export default connect(mapStateToProps, mapDispatchToProps)(List);
