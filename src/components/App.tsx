import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import EmployeeAdd from "../pages/employees/add/EmployeeAdd.page";
import Navbar from "./Navbar/Navbar";
import EmployeeList from "../pages/employees/search/EmployeeSearch.page";
import EmployeeEdit from "../pages/employees/edit/EmployeeEdit.page";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="has-background-grey-darker py-5">
        <div className="container">
          <Route path="/" exact component={EmployeeList} />
          <Route path="/add" component={EmployeeAdd} />
          <Route path="/edit/:id" component={EmployeeEdit} />
        </div>
      </div>
    </BrowserRouter>
  );
}
