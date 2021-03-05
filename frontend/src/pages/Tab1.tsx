import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Testing</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Testing</IonTitle>
          </IonToolbar>
        </IonHeader>
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

export default Tab1;
