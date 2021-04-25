import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVacation, fetchVacations, removeVacation, selectVacations, vacations } from "../../store";

interface Props {}

/**@deprecated -- List will be generated from the back end */
const VacationManagment: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    dispatch(fetchVacations());
  }, []);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(addVacation(name));
  };

  const vacation = useSelector(selectVacations);
  return (
    <div className="box">
      <h1 className="title">Vacations</h1>
      <ul className="block">
        {vacation.map(({ id, name }) => (
          <li key={id}>
            <div className="columns">
              <div className="column">
                <p className="subtitle is-4">{name}</p>
              </div>
              <div className="column is-1">
                <button className="delete" onClick={() => dispatch(removeVacation(id))}></button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className="block">
        <label htmlFor="">Add Vacation</label>
        <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default VacationManagment;