import React from "react";
import './Notification.styles.scss'

interface Props {}

const Notification: React.FC<Props> = ({ children }) => {

  const popup = document.getElementById('popup');
  setTimeout(() => {
    const ev = new Event('notify');
    document.dispatchEvent(ev);
  }, 1000)

  React.useEffect(() => {
    let ev = document.addEventListener('notify', (event) => {
      event.preventDefault();
      const newEL = document.createElement('div');
      newEL.className = 'app-notification app-notification-success';
      newEL.innerText = 'sample text';
      popup?.appendChild(newEL);

      setTimeout(() => {
        // newEL.remove();
      }, 3000)
    })
    return () => {
      // document.removeEventListener(ev);
    }
  }, [])

  return <>{children}</>;
};

export default Notification;
