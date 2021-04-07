import React from "react";
import { Switch } from "react-router";
import { Route } from "react-router-dom";

type TabRequirement = {
  title: string;
  icon?: string;
  child?: any;
};

interface Props {
  tabs?: TabRequirement[];
}

// maybe replace the active tabs with inner routes ??
const Tabs: React.FC<Props> = ({ tabs = [] }) => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div className="box">
      <div className="tabs is-centered is-boxed is-medium">
        <ul>
          {tabs.map(({ title, icon }, i) => (
            <li key={i} className={activeTab === i ? "is-active" : ""} onClick={() => setActiveTab(i)}>
              <a>
                {icon && (
                  <span className="icon is-small">
                    <i className={`fas ${icon}`}></i>
                  </span>
                )}
                <span>{title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Switch>
        <Route component={tabs[activeTab].child} />
      </Switch>
    </div>
  );
};

export default Tabs;
