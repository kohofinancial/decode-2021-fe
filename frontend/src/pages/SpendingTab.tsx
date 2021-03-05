import {
  IonButton,
  IonContent,
  IonImg,
  IonLabel,
  IonPage,
} from '@ionic/react';
import React from 'react';
import Header from '../components/Header';
import './SpendingTab.css';

const SpendingTab: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonImg src="assets/Spending.jpg" />
      </IonContent>
    </IonPage>
  );
};

export default SpendingTab;
