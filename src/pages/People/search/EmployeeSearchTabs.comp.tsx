import React from "react";
import Tabs from "../../../components/Tabs/Tab.comp";
import EmployeeProfileSearch from "./EmployeeProfileSearchcomp";
import { Button, Box } from "react-bulma-components";
const tabs = [
  { icon: "fa-user-alt", title: "Profile", child: EmployeeProfileSearch },
  { icon: "fas fa-database", title: "Specific", child: EmployeeProfileSearch },
  { icon: "fa-newspaper", title: "Additional", child: EmployeeProfileSearch },
];

const EmployeeSearchTabs: React.FC = () => {
  return (
    <div>
      <Box >Hello World</Box>
    </div>
  )
  // return <Tabs tabs={tabs} />;
  // return (
  //   <div className="box">
  //     <div className="tabs is-centered is-boxed is-medium">
  //       <ul>
  //         <li className={activeTab === 0 ? "is-active" : ""} onClick={() => setActiveTab(0)}>
  //           <a>
  //             <span className="icon is-small">
  //               <i className="fas fa-user-alt"></i>
  //             </span>
  //             <span>Profile</span>
  //           </a>
  //         </li>
  //         <li className={activeTab === 1 ? "is-active" : ""} onClick={() => setActiveTab(1)}>
  //           <a>
  //             <span className="icon is-small">
  //               <i className="fas fa-database"></i>
  //             </span>
  //             <span>Specific</span>
  //           </a>
  //         </li>
  //         <li className={activeTab === 2 ? "is-active" : ""} onClick={() => setActiveTab(2)}>
  //           <a>
  //             <span className="icon is-small">
  //               <i className="fas fa-newspaper"></i>
  //             </span>
  //             <span>Additional</span>
  //           </a>
  //         </li>
  //       </ul>
  //     </div>
  //     <EmployeeSearchForm activeTab={activeTab} />
  //   </div>
  // );
};

export default EmployeeSearchTabs;
