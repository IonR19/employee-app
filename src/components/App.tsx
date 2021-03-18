import React from "react";
import EmployeeAdd from "../Pages/Employees/Add/FormContainer";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import EmployeeList from "../Pages/Employees/List/List";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="has-background-grey-darker py-5">
        <div className="container">
          <Route path="/" exact component={EmployeeList} />
          <Route path="/add" component={EmployeeAdd} />
        </div>
      </div>
    </BrowserRouter>
  );
}
