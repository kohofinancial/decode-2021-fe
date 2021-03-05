import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonButton,
  IonCardTitle,
  IonCardContent,
  IonModal,
} from '@ionic/react';
import React, { useContext, useState } from 'react';
import CharityDonation from './CharityDonation';
import './CharityInformation.css';
import UserContext from '../components/UserContext';

const CharityInformation: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const {user} = useContext(UserContext);
  console.log(user);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardContent>
            <img src="https://lever-client-logos.s3.amazonaws.com/cd28cdb4-b64a-4531-9755-2df6d7078e82-1577991460239.png"></img>
          </IonCardContent>
          <IonCardTitle color="secondary">Charity Name</IonCardTitle>
          <IonCardContent>Description here</IonCardContent>
          <IonButton expand="block" onClick={() => setShowModal(true)}>Donate</IonButton>
        </IonCard>
        <IonModal isOpen={showModal} cssClass="donate-modal">
            Test
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default CharityInformation;
