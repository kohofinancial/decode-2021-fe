import { IonContent, IonImg, IonPage } from '@ionic/react';
import React from 'react';
import Header from '../components/Header';
import './SavingsTab.css';

const SavingsTab: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonImg src="assets/Saving.jpg" />
      </IonContent>
    </IonPage>
  );
};

export default SavingsTab;
