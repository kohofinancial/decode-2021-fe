import React, { useEffect, useState } from 'react';
import './Notification.css';

const Notification: React.FC<any> = ({title, body, start, goto}) => {

  const [classes, setClasses] = useState("");

  useEffect(() => {
    if(start){
      setClasses("notif-animated-in");
      console.log(start);
    }
  }, [start]);

  return(
    <div className={"notif-body " + classes} onClick={() => {
      if(start) goto();
    }}>
      <div className="notif-header">
        <img src={process.env.PUBLIC_URL + '/assets/icon/favicon.png'}></img>
        <div>KOHO Charity</div>
      </div>
      <div>
        Congrats! You've fulfilled your campaign by donating
        $xx.xx to xxxxx. Good for you! &#127881;
      </div>
    </div>
  )
};

export default Notification;