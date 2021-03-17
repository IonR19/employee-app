import React from "react";
import EmployeeAdd from "./EmployeeAddForm/FormContainer";
<<<<<<< HEAD
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
=======
>>>>>>> 3ea2754bd12403dc52c430433e4f699f1cdafc92
// import "bulma";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="has-background-grey-darker py-5">
        <div className="container">
          <Route path="/" exact component={() => <div>test</div>} />
          <Route path="/add" component={EmployeeAdd} />
        </div>
      </div>
    </BrowserRouter>
  );
}
