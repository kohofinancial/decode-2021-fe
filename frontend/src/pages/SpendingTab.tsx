import {
  IonButton,
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import Header from '../components/Header';
import './SpendingTab.css';

const SpendingTab: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>        
        <IonButton routerLink="/information">
          <IonLabel>Charity Information</IonLabel>
        </IonButton>
        <IonButton routerLink="/donation">
          <IonLabel>Charity Donation</IonLabel>
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SpendingTab;
