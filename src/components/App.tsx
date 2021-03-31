import React from "react";
import EmployeeAdd from "../Pages/Employees/Add/FormContainer";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import EmployeeList from "../Pages/Employees/List/List";
import TodoConnect from "../Pages/Todo/TodoConnect.comp";
import TodoHooks from "../Pages/Todo/TodoHooks.comp";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="has-background-grey-darker py-5">
        <div className="container">
          <div className="columns">
            <div className="column">
              <TodoConnect />
            </div>
            <div className="column">
              <TodoHooks />
            </div>
          </div>

          {/* <Route path="/" exact component={EmployeeList} /> */}
          {/* <Route path="/add" component={EmployeeAdd} /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}
