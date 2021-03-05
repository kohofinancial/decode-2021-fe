import {
  IonButton,
  IonContent,
  IonLabel,
  IonPage,
  IonImg,
  IonAlert,
} from '@ionic/react';
import React, { useState }  from 'react';
import './UberEats.css';

const UberEats: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);

  const minPurchase = 10;
  const maxPurchase = 50;
  var purchaseAmount: number;

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
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
                // TODO: Go back in history after confirming purchase
                console.log('Purchase confirmed: $' + purchaseAmount);
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
