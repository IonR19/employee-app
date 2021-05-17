import React, { useEffect } from "react";
import { Icon } from "react-bulma-components";
import { useDispatch } from "react-redux";
import { iAlert, clearAlerts } from "../../store/";
import "./Alert.style.scss";
interface Props extends iAlert {
  id: number;
}

const Alert: React.FC<Props> = ({ id, type, children }) => {
  const [active, setActive] = React.useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => setActive("active"), 0);
    let timer = setTimeout(() => {
      dispatch(clearAlerts());
    }, 2345);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  let icon;
  switch (type) {
    case "warning":
    case "success":
      icon = "fa-check-circle";
      break;
    default:
      icon = "fa-times-circle";
  }

  return (
    <div className={`app-alert has-background-${type} ${active}`}>
      <Icon style={{ fontSize: "2rem" }}>
        <i className={`fas ${icon}`} />
      </Icon>
      {children}
    </div>
  );
};

export default Alert;
