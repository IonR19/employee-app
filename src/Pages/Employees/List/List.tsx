import React, { useState } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { combineReducers } from "redux";
import { RootState } from "../../../store/store";

const A = connect((state: any) => ({ vodo: state.vodo }))((props: any) => {
  console.log('component A')
  const [input, setInput] = useState("");
  return (
    <div>
      <ul>
        {props.vodo.map((v: any, i: number) => (
          <li key={i}>
            {v} <button onClick={() => props.dispatch({ type: "DELETE", payload: v })}>delete</button>{" "}
          </li>
        ))}
      </ul>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button
        className="button is-primary"
        onClick={() => props.dispatch({ type: "ADD", payload: input })}
      >
        Add
      </button>
    </div>
  );
});
const B = connect((state: any) => ({ vodo: state.todos }))((props: any) => {
  console.log('component B')
  const [input, setInput] = useState("");
  return (
    <div>
      <ul>
        {props.vodo.map((v: any, i: number) => (
          <li key={i}>
            {v}
            <button onClick={() => props.dispatch({ type: "REMOVE_USER", payload: v })}>delete</button>
          </li>
        ))}
      </ul>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button
        className="button is-primary"
        onClick={() => props.dispatch({ type: "ADD_USER", payload: input })}
      >
        Add
      </button>
    </div>
  );
});

const List: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);
  const [value, setValue] = useState("");

  return (
    <div>
      <div className="columns p-2">
        <div className="column has-background-info mx-2">
          <A></A>
        </div>
        <div className="column has-background-info mx-2">
          <B></B>
        </div>
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
