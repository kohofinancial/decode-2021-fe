import {
  IonContent,
  IonPage,
  IonImg,
  IonAlert,
} from '@ionic/react';
import React, { useState, useContext }  from 'react';
import { useHistory } from "react-router-dom";
import Notification from '../components/Notification';
import UserContext from '../components/UserContext';
import './UberEats.css';

const UberEats: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const history = useHistory();
  const {user} = useContext(UserContext);

  const minPurchase = 10;
  const maxPurchase = 50;
  var purchaseAmount: number;

  return (
    <IonPage>
      <IonContent fullscreen>

        <Notification start={showNotification} goto={() => {
          history.push("/tabs");
        }}/>

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => {
            setShowAlert(false);
            setShowNotification(true);
          }}
          header={'Purchase amount'}
          message={'$' + (purchaseAmount = Math.floor(Math.random() * (maxPurchase * 100 - minPurchase * 100) + minPurchase * 100) / 100).toFixed(2)}
          buttons={[
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
            },
            {
              text: 'Done',
              handler: () => {
                fetch('https://decode-be-2021.herokuapp.com/transactions', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    userId: user._id,
                    amount: purchaseAmount,
                    type: "purchase",
                    receiver: "Uber Eats"
                  })
                });
                // Reroute to home
                //history.push("/tabs");
              }
            }
          ]}
        />
        <IonImg className="ubereats__image" src="assets/uber-eats.png" onClick={() => setShowAlert(true)}/>
      </IonContent>
    </IonPage>
  );
};

export default UberEats;
