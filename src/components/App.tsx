import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EmployeeAdd from "../pages/People/add/EmployeeAdd.page";
import Navbar from "./Navbar/Navbar";
import EmployeeSearch from "../pages/People/search/EmployeeSearch.page";
import EmployeeEdit from "../pages/People/edit/EmployeeEdit.page";
import EmployeeVacation from "../pages/People/vacation/EmployeeVacation.page";

import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees, selectSite } from "../store";
import OrderList from "../pages/Orders/List/OrderList.page";
import EmployeeRemove from "../pages/People/remove/EmployeeRemove.page";

export default function App() {
  const dispatch = useDispatch();

  const site = useSelector(selectSite);
  React.useEffect(() => {
    dispatch(fetchEmployees({ site }));
  }, [site]);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="has-background-grey-darker py-5" id="App">
        <div className="container">
          <Switch>
            <Route path="/orders" component={OrderList} />
            <Route path="/vacations" component={EmployeeVacation} />
            <Route path="/edit/:id" component={EmployeeEdit} />
            <Route path="/add" component={EmployeeAdd} />
            <Route path="/" component={EmployeeSearch} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
