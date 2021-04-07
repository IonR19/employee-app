import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EmployeeAdd from "../pages/People/add/EmployeeAdd.page";
import Navbar from "./Navbar/Navbar";
import EmployeeSearch from "../pages/People/search/EmployeeSearch.page";
import EmployeeEdit from "../pages/People/edit/EmployeeEdit.page";
import EmployeeVacation from "../pages/People/vacation/EmployeeVacation.page";

import "./App.scss";
import { useDispatch } from "react-redux";
import { fetchEmployees } from "../store";
import VacationManagment from "../pages/vacations/VacationManagment.page";

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
            <Route path="/vacation" component={VacationManagment} />
            <Route path="/vacations" component={EmployeeVacation} />
            <Route path="/edit/:id" component={EmployeeEdit} />
            <Route path="/add" component={EmployeeAdd} />
            <Route path="/" exact component={EmployeeSearch} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
