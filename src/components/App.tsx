import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EmployeeAdd from "../pages/employees/add/EmployeeAdd.page";
import Navbar from "./Navbar/Navbar";
import EmployeeList from "../pages/employees/search/EmployeeSearch.page";
import EmployeeEdit from "../pages/employees/edit/EmployeeEdit.page";
import EmployeeVacation from "../pages/employees/vacation/EmployeeVacation.page";

import "./App.scss";
import { useDispatch } from "react-redux";
import { fetchEmployees } from "../store";

export default function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchEmployees());
  });

  return (
    <BrowserRouter>
      <Navbar />
      <div className="has-background-grey-darker py-5">
        <div className="container">
          <Switch>
            <Route path="/vacations" component={EmployeeVacation} />
            <Route path="/edit/:id" component={EmployeeEdit} />
            <Route path="/add" component={EmployeeAdd} />
            <Route path="/" exact component={EmployeeList} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
