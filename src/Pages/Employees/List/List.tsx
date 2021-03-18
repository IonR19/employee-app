import React from "react";

const List: React.FC = () => {
  return (
    <div>
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
